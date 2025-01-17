export default class ALXClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new Error('size must be number');
    }
    if (typeof location !== 'string') {
      throw new Error('locatiion must be number');
    }
    this._size = size;
    this._location = location;
  }

  toString() {
    return this._location;
  }

  valueOf() {
    return this._size;
  }
}
