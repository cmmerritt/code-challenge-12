/* use map for toLastNames */

export const toLastNames = people => people.map(function(element){
  return `${element.firstName} ${element.lastName}`;
});

// trying several variations of reduce, not getting it 

/* export function addValues(arr) {
  arr.reduce((a, b) => a + b, 0);
} */

/* export function addValues(arr) {
  arr.reduce(function(a, b) {
    return a + b;
  });
} */

/* export function addValues(arr) {
  console.log(arr);
  arr.reduce( (a, b) => a + b, 0 )
}; */

export const addValues = arr => arr.reduce((a, b) => a + b, 0);

export const addPurchases = arr => arr.reduce((a, b) => a + b.purchasePrice, 0);








