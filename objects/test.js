let myArray = {
  0: '4',
  1: '6',
  2: '3',
  3: '9',
  length: 4,
}
let objKeys = Object.keys(myArray);
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys); // => [ 'B', 'A', 'C' ]
console.log(obj); // => { b: 2, a: 1, c: 3 }