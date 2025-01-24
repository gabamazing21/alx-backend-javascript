const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  req.statusCode = 200;
  req.header('Content-Type', 'txt/plain');
  res.send('Hello Holberton School!\n');
});

async function getcountStudents(filename) {
  try {
    // read file asynchronously
    const data = await fs.readFile(filename, 'utf-8');

    // split the file content into lines
    const lines = data.trim().split('\n');

    if (lines < 2) {
      throw new Error('Cannot load the database.');
    }
    // Initialize an object to count the student by field
    const fieldCounts = {};

    for (let i = 1; i < lines.length; i += 1) {
      const fields = lines[i].split(',');
      if (!(fields.length === 0 || fields[0].trim() === '')) {
        // skip empty lines or invalid data
        const field = fields[3];
        const firstName = fields[0];
        // initialize the field entry if it doesn't exist
        if (fieldCounts[field]) {
          fieldCounts[field].count += 1;
          fieldCounts[field].students.push(firstName);
        } else {
          fieldCounts[field] = { count: 1, students: [firstName] };
        }
      }
    }

    const totalStudents = lines.length - 1;

    // console.log(`Number of students: ${totalStudents}`);

    // // display the result

    return Promise.resolve({
      totalStudents,
      fieldCounts,
    });
  } catch (error) {
    console.error('Cannot load the database');
    return Promise.reject(error);
  }
}

app.get('/students', async (req, res) => {
  const filename = process.argv[2];
  if (!filename) {
    res.status(400).send('Cannot load the database.\n'); // Bad Request
    return;
  }

  try {
    // get student counts and data from the database csv
    const studentObject = await getcountStudents(filename);

    const totalStudent = studentObject.totalStudents;

    if (totalStudent === 0) {
      res.send('Cannot load the database.\n');
    } else {
      const fieldCount = studentObject.fieldCounts;
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${totalStudent}\n`);

      for (const field in fieldCount) {
        if (Object.prototype.hasOwnProperty.call(fieldCount, field)) {
          res.write(`Number of students in ${field}: ${fieldCount[field].count}. List: ${fieldCount[field].students.join(', ')}\n`);
        }
      }
      res.end();
    }
  } catch (error) {
    res.status(500).send(`Error reading database: ${error.message}\n`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
