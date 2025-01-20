export default function getStudentsByLocation(listsOfstudent, keyword) {
  return listsOfstudent.filter((student) => student.location === keyword);
}
