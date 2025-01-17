import listOfStudents from "./9-hoisting.js";

console.log('value of list of students:');
console.log(listOfStudents);
console.log('value of list of student print above');

const listPrinted = listOfStudents.map((student) => student.fullStudentDescription);

console.log(listPrinted);
