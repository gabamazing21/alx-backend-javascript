interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}
const student1: Student = {
  firstName: 'gabriel',
  lastName: 'Daramola',
  age: 25, location: 'ife'
};

const student2: Student = {
  firstName: 'gabriel',
  lastName: 'wale',
  age: 26,
  location: 'lagos'
};
let studentsList: Student[] = [student1, student2];

function renderTable(students: Student[]): void {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  students.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");
    locationCell.textContent = student.firstName;
    row.appendChild(locationCell);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}
renderTable(studentsList);
