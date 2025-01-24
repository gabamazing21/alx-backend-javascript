const fs = require('fs').promises;

/**
 * reads a csv file and counts student in each field
 * @param {string} filename
 */
async function countStudents(filename) {
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

    console.log(`Number of students: ${totalStudents}`);

    // display the result
    console.log(fieldCounts);
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        console.log(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${fieldCounts[field].students.join(', ')}`);
      }
    }
    return Promise.resolve();
  } catch (error) {
    console.error('Cannot load the database');
    return Promise.reject(error);
  }
}

module.exports = countStudents;
