const fs = require('fs');

/**
 * reads a csv file and counts student in each field
 * @param {string} filename
 */
function countStudents(filename) {
  try {
    // ensuring file exists
    if (!fs.existsSync(filename)) {
      console.error('Cannot load the database');
      return;
    }
    // read the file content
    const data = fs.readFileSync(filename, 'utf-8');

    const lines = data.trim().split('\n');

    if (lines < 2) {
      console.log('No student data found.');
      return;
    }
    // extract the header line (first line)
    // const headers = lines[0].split(',');
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
  } catch (err) {
    console.error('Error reading the file:', err);
  }
}

module.exports = countStudents;
