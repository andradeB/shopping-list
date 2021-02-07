import { IBuyable } from './IBuyable';
import { ICountble } from './ICountable';

import { Invoice } from './Invoice';
import { AbstractCountable } from './AbstractCountable';
import { ProductList } from './ProductList';
import { Product } from './Product';

declare module 'shopping-list/interfaces' {
  export { IBuyable, ICountble };
}

declare module 'shopping-list/modules' {
  export { Invoice, ProductList, Product };
}

declare module 'shopping-list/abstract' {
  export { AbstractCountable };
}
