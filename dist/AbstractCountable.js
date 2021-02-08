export class AbstractCountable {
  constructor(amount = 1) {
    this._amount = 0;
    this.amount = amount;
  }

  set amount(value) {
    if (!Number.isInteger(value)) {
      throw new Error('Amount must be Integer');
    }

    this._amount = value;
  }

  get amount() {
    return this._amount;
  }

}
//# sourceMappingURL=AbstractCountable.js.map