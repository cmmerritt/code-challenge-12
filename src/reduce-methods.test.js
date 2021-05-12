import { toLastNames, addValues } from './reduce-methods.js';

test('toLastNames', () => {
  expect(toLastNames([{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }])).toStrictEqual(['Jane Doe', 'James Bond']);
});

test('addValues', () => {
  console.log(addValues(57, 92, 18));
  expect(addValues([57, 92, 18]).toStrictEqual(167));
});