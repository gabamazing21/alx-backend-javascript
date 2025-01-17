import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    if (typeof brand !== 'string') {
      throw new Error('brand must be string');
    }
    if (typeof motor !== 'string') {
      throw new Error('motor must be string');
    }
    if (typeof color !== 'string') {
      throw new Error('color must be string');
    }
    if (typeof range !== 'string') {
      throw new Error('range must be string');
    }
    super(brand, motor, color);
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car; // always return a base car not subclass
  }
}
