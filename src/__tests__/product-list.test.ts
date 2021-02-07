import { Product } from '../Product';
import { ProductList } from '../ProductList';

describe('Testing ProductList Class', () => {
  const pen = new Product('Pen', 2, 2.54);
  const PRODUCTLIST = [pen, pen, pen, pen];

  const PRICE = 2.54 * 4;
  const CENTS = 254 * 4;
  const AMOUNT = 2;

  const TOTAL = AMOUNT * PRICE;

  const penList = new ProductList('Bruno List', PRODUCTLIST, AMOUNT);

  it('should return right ProductList price', () => {
    expect(penList.price).toBe(PRICE);
  });

  it('should return right ProductList cents', () => {
    expect(penList.cents).toBe(CENTS);
  });

  it('should return right ProductList total', () => {
    expect(penList.total).toBe(TOTAL);
  });

  it('should return right ProductList total cents', () => {
    expect(penList.totalCents).toBe(TOTAL * 100);
  });

});
