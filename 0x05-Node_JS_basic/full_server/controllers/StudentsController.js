import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const filename = process.argv[2];
      const studentByField = await readDatabase(filename);
      console.log(studentByField);
      let responseText = 'This is the list of our students\nNumber of student';
      // sort fields alphabetically (case-insensitive)
      const fields = Object.keys(studentByField).sort((a, b) => a
        .toLowerCase().localeCompare(b.toLowerCase()));

      fields.forEach((field) => {
        const student = studentByField[field].students;
        responseText += `\nNumber of students in 
        ${field}: ${student.length}. List: ${student.join(', ')}`;
      });
      res.status(200).send(responseText);
    } catch (error) {
      console.log(error);
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const majors = req.params.major; // "CS" or "SWE"
    if (majors !== 'CS' && majors !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const filename = process.argv[2];
      const studentByField = await readDatabase(filename);

      const student = studentByField[majors] || [];
      const responseText = `List: ${student.students.join(', ')}`;
      res.status(200).send(responseText);
    } catch (error) {
      console.log(error);
      res.status(200).send('Cannot load the database');
    }
  }
}

export default StudentsController;
