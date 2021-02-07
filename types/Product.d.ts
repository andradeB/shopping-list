import { IBuyable } from './IBuyable';
import { AbstractCountable } from './AbstractCountable';
export declare class Product extends AbstractCountable implements IBuyable {
    name: string;
    private _price;
    constructor(name: string, amount: number, price: number);
    set price(value: number);
    get price(): number;
    get cents(): number;
    get total(): number;
    get totalCents(): number;
}
