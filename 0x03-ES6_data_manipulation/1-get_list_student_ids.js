export default function getListStudentIds(listsOfstudent) {
  if (!(listsOfstudent instanceof Array)) {
    return [];
  }
  return listsOfstudent.map((students) => students.id);
}
