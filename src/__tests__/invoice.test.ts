import { Product } from '../Product';
import { Invoice } from "../Invoice";
import { listGenerator } from "./helpers";

describe('Testing repeating decimals', () => {
  const product4 = new Product('product1', 1, 4);
  const product10 = new Product('product2', 1, 10);
  const product23 = new Product('product3', 1, 23);
  const product32 = new Product('product4', 1, 32);
  const product52 = new Product('product5', 1, 52);


  const emailList3 = listGenerator(3);
  const emailList9 = listGenerator(9);
  const emailList90 = listGenerator(90);

  it('Testing 4/9', () => {
    const invoice = new Invoice(product4, emailList9);
    const parts = invoice.splitDue();

    const first = parts[0];
    const last = parts[parts.length - 1];

    expect(first.price).toBe(0.44);
    expect(first.cents).toBe(44);

    expect(last.price).toBe(0.48);
    expect(last.cents).toBe(48);
  });

  it('Testing 10/3', () => {
    const invoice = new Invoice(product10, emailList3);
    const parts = invoice.splitDue();

    const first = parts[0];
    const last = parts[parts.length - 1];

    expect(first.price).toBe(3.33);
    expect(first.cents).toBe(333);

    expect(last.price).toBe(3.34);
    expect(last.cents).toBe(334);
  });

  it('Testing 23/9', () => {
    const invoices = Invoice.splitDue(product23, emailList9);

    const first = invoices[0];
    const last = invoices[invoices.length - 1];

    expect(first.price).toBe(2.55);
    expect(first.cents).toBe(255);

    expect(last.price).toBe(2.6);
    expect(last.cents).toBe(260);
  });

  it('Testing 32/9', () => {
    const invoices = Invoice.splitDue(product32, emailList9);

    const first = invoices[0];
    const last = invoices[invoices.length - 1];

    expect(first.price).toBe(3.55);
    expect(first.cents).toBe(355);

    expect(last.price).toBe(3.6);
    expect(last.cents).toBe(360);
  });

  it('Testing 52/90', () => {
    const invoices = Invoice.splitDue(product52, emailList90);

    const first = invoices[0];
    const last = invoices[invoices.length - 1];

    expect(first.price).toBe(0.57);
    expect(first.cents).toBe(57);

    expect(last.price).toBe(1.27);
    expect(last.cents).toBe(127);
  });
});


