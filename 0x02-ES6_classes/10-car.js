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

  cloneCar() {
    const newObj = Object.create(this);
    return newObj;
  }
}
