import { promises as fs } from 'fs';

export default async function readDatabase(filename) {
  try {
    // read file asynchronously
    const data = await fs.readFile(filename, 'utf-8');

    // split the file content into lines
    const lines = data.trim().split('\n');

    if (lines.length < 2) {
      throw new Error('Cannot load the database.');
    }
    // Initialize an object to count the student by field
    const fieldCounts = {};

    for (let i = 1; i < lines.length; i += 1) {
      const row = lines[i].split(',');
      if (!(row.length === 0 || row[0].trim() === '')) {
        // skip empty lines or invalid data
        const field = row[3];
        const firstName = row[0];
        // initialize the field entry if it doesn't exist
        if (fieldCounts[field]) {
          // fieldCounts[field].count += 1;
          fieldCounts[field].students.push(firstName);
        } else {
          fieldCounts[field] = { students: [firstName] };
        }
      }
    }

    // const totalStudents = lines.length - 1;

    // console.log(`Number of students: ${totalStudents}`);

    // // display the result

    return Promise.resolve(fieldCounts);
  } catch (error) {
    console.error('file not accessible');
    return Promise.reject(error);
  }
}
