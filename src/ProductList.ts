import { IBuyable } from './IBuyable';
import { Product } from './Product';
import { AbstractCountable } from './AbstractCountable';

export class ProductList extends AbstractCountable implements IBuyable {
  name: string;

  private _products: Product[];

  constructor(name: string, products: Product[], amount: number) {
    super(amount);
    this.name = name;
    this._products = products;
  }

  get cents() {
    return this._products.reduce((sum, product) => (sum += product.cents), 0);
  }

  get price() {
    return this._products.reduce((sum, product) => (sum += product.price), 0);
  }

  get total() {
    return this.price * this.amount;
  }

  get totalCents() {
    return this.cents * this.amount;
  }
}
