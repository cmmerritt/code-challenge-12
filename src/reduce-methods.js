/* use map for toLastNames */

export const toLastNames = people => people.map(function(element){
  return `${element.firstName} ${element.lastName}`;
});

export function addValues(arr) {
  arr.reduce((a, b) => a + b, 0);
}




