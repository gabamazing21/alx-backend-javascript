const fs = require('fs');

/**
 * reads a csv file and counts student in each field
 * @param {string} filename
 */
function countStudents(filename) {
  try {
    // ensuring file exists
    if (!fs.existsSync(filename)) {
      throw new Error('Cannot load the database');
    }
    // read the file content
    fs.readFile(filename, 'utf-8', (err, data) => {
      if (err) {
        console.log('Error reading the file', err);
        return;
      }

      const lines = data.trim().split('\n');
      if (lines < 2) {
        console.log('No student data found.');
        return;
      }
      console.log(`Number of students: ${lines - 1}`);

      // extract the header line (first line)
      const headers = lines[0].split(',');
      // verify last column is 'field'
      const lastColumnIndex = headers.length - 1;
      const fieldName = headers[lastColumnIndex].trim();
      console.log('counting student based on field name');

      // dictionary to count student in each fields
      const fieldCount = {};
      const firstNameIndex = 0;

      for (let i = 1; i < lines.length; i += 1) {
        const columns = lines[i].split(',');
        const field = columns[lastColumnIndex].trim();
        // extracting the first name
        const firstName = columns[firstNameIndex].trim();

        // initialize the field entry if it doesn't exist
        if (!fieldCount[field]) {
          fieldCount[field] = {
            count: 0,
            names: [],
          };
        }

        // Increment the count for each field
        fieldCount[field].count += 1;
        fieldCount[field].names.push(firstName);
      }

      // display the result
      for (const [field, details] of Object.entries(fieldCount)) {
        console.log(`Number of students in ${field}: ${details.count}.`);
        console.log(`List: ${details.names.join(', ')}`);
      }
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = countStudents;
