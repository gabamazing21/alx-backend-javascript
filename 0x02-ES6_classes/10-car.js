export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new Error('brand must be string');
    }
    if (typeof motor !== 'string') {
      throw new Error('motor must be string');
    }
    if (typeof color !== 'string') {
      throw new Error('color must be string');
    }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this; // always return base car not subclass
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species(this._brand, this._motor, this._color);
  }
}
