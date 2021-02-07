import { ICountble } from './ICountable';

export abstract class AbstractCountable implements ICountble {
  private _amount: number = 0;

  constructor(amount = 1) {
    this.amount = amount;
  }

  set amount(value: number) {
    if (!Number.isInteger(value)) {
      throw new Error('Amount must be Integer');
    }

    this._amount = value;
  }

  get amount() {
    return this._amount;
  }
}
