export default class ALXCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (this.isArrayOfStrings()) {
      throw new TypeError('students must to be an array of string');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Expected "name" to be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Expected "length" to be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (this.isArrayOfStrings()) {
      throw new TypeError('Expected "student" to be an array string');
    }
    this._students = newStudents;
  }

  isArrayOfStrings() {
    return Array.isArray(this.students) && this.students.every((elem) => typeof elem === 'string');
  }
}
