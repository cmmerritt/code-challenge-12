import { toLastNames, addValues, addPurchases, countNumberOfElements, returnStarWarsData } from './reduce-methods.js';

test('toLastNames', () => {
  expect(toLastNames([{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }])).toStrictEqual(['Jane Doe', 'James Bond']);
});

test('addValues', () => {
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

test('countNumberOfElements', () => {
  expect(countNumberOfElements(purchases)).toStrictEqual(4);
});

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

test('Michael, go see a Star War', () => {
  expect(returnStarWarsData(starWarsData)).toStrictEqual(['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa']);
});