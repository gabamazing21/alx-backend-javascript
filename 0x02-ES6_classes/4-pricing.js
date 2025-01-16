import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amout must be number');
    }

    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }

    this._amount = amount;
    this._currency = currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
