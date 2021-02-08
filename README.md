![enter image description here](https://img.shields.io/badge/version-0.1.3-success) ![enter image description here](https://img.shields.io/badge/covarege-100%25-success)

# Shopping list

Develop a shopping list that can receive items, and divide the total amount between people, by email.

### Money!  Money! Money!
Pay special attention to the division so as not to lose a cent, and consider only 2 decimal places.

## How to install
### Use the git+yarn (or npm)
```
yarn add ssh://git@github.com:andradeB/shopping-list.git
```

## How to use

```javascript
import { Product, ProductList, Invoice } from 'shopping-list';

const scissors = new Product('Scissors', 1, 5);
const pen = new Product('Pen', 2, 2.5);

const emails = [
	'a@email.com',
	'b@email.com',
	'c@email.com'
];

const shoppingList = new ProductList('Bruno List', [scissors, pen], 1);

const saleResult = Invoice.splitDue(product52, emailList90);

// result will be an object with email and splitted prices result

/*
saleResult = [
	{
		email: 'a@email.com',
		cents: 333,
		price: 3.33,
	},
	{
		email: 'b@email.com',
		cents: 333,
		price: 3.33,
	},
	{
		email: 'c@email.com',
		cents: 334,
		price: 3.34,
	},
]
*/
```
