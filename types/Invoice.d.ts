import { IBuyable } from './IBuyable';
export declare class Invoice {
    item: IBuyable;
    emails: string[];
    remainderEmail?: string;
    constructor(item: IBuyable, emails: string[]);
    static splitDue(item: IBuyable, emails: string[]): {
        email: string;
        cents: number;
        price: number;
    }[];
    private static divide;
    splitDue: () => {
        email: string;
        cents: number;
        price: number;
    }[];
}
