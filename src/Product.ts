import { IBuyable } from './IBuyable';
import { AbstractCountable } from './AbstractCountable';

export class Product extends AbstractCountable implements IBuyable {
  name: string;
  private _price: number = 0;

  constructor(name: string, amount: number, price: number) {
    super();
    this.name = name;
    this.amount = amount;
    this.price = price;
  }

  set price(value: number) {

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
