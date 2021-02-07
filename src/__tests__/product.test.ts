import { Product } from '../Product';

describe('Testing Product Class', () => {
  const PRICE = 2.54;
  const CENTS = 254;
  const AMOUNT = 2;

  const TOTAL = AMOUNT * PRICE;
  const pen = new Product('Pen', AMOUNT, PRICE);

  it('should return right unit price', () => {
    expect(pen.price).toBe(PRICE);
  });

  it('should return right cents', () => {
    expect(pen.cents).toBe(CENTS);
  });

  it('should return right total', () => {
    expect(pen.total).toBe(TOTAL);
  });

  it('should trow an error when more them 2 decimals are used', () => {
    expect(() => {
      const WrongPen = new Product('Caneta', AMOUNT, 2.222);
    }).toThrow();
  });

  it('should trow an error when amount isn`t int', () => {
    expect(() => {
      const WrongPen = new Product('Caneta', 2.1, PRICE);
    }).toThrow();
  });

});
