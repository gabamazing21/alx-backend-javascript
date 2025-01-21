export default function updateStudentGradeByCity(listOfStudent, city, newGrades) {
  return listOfStudent
    .filter((studentFilter) => (studentFilter.location === city))
    .map((student) => {
      const matchingGrade = newGrades.find((grades) => grades.studentId === student.id);
      return { ...student, grade: matchingGrade ? matchingGrade.grade : 'N/A' };
    });
}
