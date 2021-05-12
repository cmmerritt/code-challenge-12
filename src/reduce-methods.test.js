import { toLastNames, addValues, addPurchases } from './reduce-methods.js';

test('toLastNames', () => {
  expect(toLastNames([{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }])).toStrictEqual(['Jane Doe', 'James Bond']);
});

test('addValues', () => {
  console.log(addValues[57, 92, 18]);
  expect(addValues([57, 92, 18])).toStrictEqual(167);
});

const purchases = [
  {
    item: 'switch',
    purchasePrice: 399
  },

  {
    item: 'a brain',
    purchasePrice: 25699
  },

  {
    item: 'a heart',
    purchasePrice: 89563
  },

  {
    item: 'the noive',
    purchasePrice: 2890
  }
];

test('addPurchases', () => {
  expect(addPurchases(purchases)).toStrictEqual(118551);
});
