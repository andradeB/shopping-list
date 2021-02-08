import { AbstractCountable } from './AbstractCountable';
export class Product extends AbstractCountable {
  constructor(name, amount, price) {
    super();
    this._price = 0;
    this.name = name;
    this.amount = amount;
    this.price = price;
  }

  set price(value) {
    if (!Number.isInteger(value * 100)) {
      throw new Error('Product don`t support more than 2 decimals');
    }

    this._price = value;
  }

  get price() {
    return this._price;
  }

  get cents() {
    return this._price * 100;
  }

  get total() {
    return this.price * this.amount;
  }

  get totalCents() {
    return this.cents * this.amount;
  }

}
//# sourceMappingURL=Product.js.map