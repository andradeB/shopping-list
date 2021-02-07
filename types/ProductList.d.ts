import { IBuyable } from './IBuyable';
import { Product } from './Product';
import { AbstractCountable } from './AbstractCountable';
export declare class ProductList extends AbstractCountable implements IBuyable {
    name: string;
    private _products;
    constructor(name: string, products: Product[], amount: number);
    get cents(): number;
    get price(): number;
    get total(): number;
    get totalCents(): number;
}
