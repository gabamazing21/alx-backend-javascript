export default class Building {
  constructor(sqft) {
    // if (new.target === Building) {
    //   throw new Error('Cannot instantiae an abstract class directly');
    // }
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be number');
    }

    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    this();
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
