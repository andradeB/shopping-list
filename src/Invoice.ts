import { IBuyable } from './IBuyable';

export class Invoice {
  item: IBuyable;
  emails: string[];
  remainderEmail?: string;

  constructor(item: IBuyable, emails: string[]) {
    this.item = item;
    this.emails = emails;
  }

  static splitDue(item: IBuyable, emails: string[]) {

    const divisor = emails.length;
    const dividend = item.totalCents;

    const { quotient, remainder } = Invoice.divide(divisor, dividend);

    return emails.map((email, i) => {
      const cents = i === emails.length - 1 ? quotient + remainder : quotient;
      const price = cents / 100;

      return { email, cents, price };
    });
  }

  private static divide(divisor: number, dividend: number) {
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;

    return { quotient, remainder };
  }

  splitDue = () => Invoice.splitDue(this.item, this.emails);
}
