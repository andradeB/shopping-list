import { ICountble } from './ICountable';
export declare abstract class AbstractCountable implements ICountble {
    private _amount;
    constructor(amount?: number);
    set amount(value: number);
    get amount(): number;
}
