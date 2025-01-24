const { createServer } = require('node:http');
const fs = require('fs').promises;

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

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer(async (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students' && req.method === 'GET') {
    const filename = process.argv[2];
    if (!filename) {
      res.statusCode = 400; // Bad Request
      res.setHeader('Content-Type', 'text/plain');
      res.end('No database file provided. \n');
      return;
    }
    try {
      const studentObject = await getcountStudents(filename);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');

      const totalStudent = studentObject.totalStudents;
      if (totalStudent === 0) {
        res.end('This is the list of our students no student found');
      } else {
        const fieldCount = studentObject.fieldCounts;
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${totalStudent}\n`);

        for (const field in fieldCount) {
          if (Object.prototype.hasOwnProperty.call(fieldCount, field)) {
            res.write(`Number of students in ${field}: ${fieldCount[field]
              .count}. List: ${fieldCount[field]
              .students
              .join(', ')}\n`);
          }
        }
        res.end();
      }
    } catch (error) {
      res.statusCode = 500; // Internal server error
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Error reading database: ${error.message}\n`);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found\n');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
