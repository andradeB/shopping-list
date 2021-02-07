export class Invoice {
  constructor(item, emails) {
    this.splitDue = () => Invoice.splitDue(this.item, this.emails);

    this.item = item;
    this.emails = emails;
  }

  static splitDue(item, emails) {
    const divisor = emails.length;
    const dividend = item.totalCents;
    const {
      quotient,
      remainder
    } = Invoice.divide(divisor, dividend);
    return emails.map((email, i) => {
      const cents = i === emails.length - 1 ? quotient + remainder : quotient;
      const price = cents / 100;
      return {
        email,
        cents,
        price
      };
    });
  }

  static divide(divisor, dividend) {
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    return {
      quotient,
      remainder
    };
  }

}
//# sourceMappingURL=Invoice.js.map