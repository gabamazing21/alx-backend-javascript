export default function getStudentIdsSum(listsOfstudent) {
  const listOfIds = listsOfstudent.map((student) => student.id);
  return listOfIds.reduce((acc, cur) => (acc + cur), 0);
}
