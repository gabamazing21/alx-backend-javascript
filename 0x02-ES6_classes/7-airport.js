export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new Error('name must be string');
    }
    if (typeof code !== 'string') {
      throw new Error('code must be string');
    }
    this._name = name;
    this._code = code;
  }

  // get [Symbol.toStringTag]() {
  //   return this._code;
  // }

  toString() {
    return `[object ${this._code}]`;
  }
}
