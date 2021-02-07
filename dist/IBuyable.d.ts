import { ICountble } from "./ICountable";
export interface IBuyable extends ICountble {
    cents: number;
    totalCents: number;
    price: number;
    total: number;
}
