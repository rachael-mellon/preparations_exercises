// Exercise 1
/* array1.length = 4
** array2.length = 5
** array3.length = 0
** array4.length = 3
array5.length = 101 */


// Exercise 2
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
myArray.filter(num => {if (num % 2 === 0) console.log(num)});
/* This gave the correct expected output but the solution used the forEach
method so I will try again */
myArray.forEach(num => {if (num % 2 === 0) console.log(num)}); 
/* is it stylistically acceptable to use if statements in arrow functions
like this or should it be done in the function declaration format? */

// Exercise 3
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];


myArray.forEach(function(nestedArray) { 
  nestedArray.forEach(function(num) {
    if (num % 2 === 0) {
      console.log(num);
    }
  })
});

// Exercise 4
// tried it with the nested arrays first for a challenge
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.map(function(nestedArray) {
  nestedArray.map(function(num) {
    num % 2 === 0
    ? console.log('even')
    : console.log('odd')
  })
})

// here is the array in the originial problem
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

myArray.map(function(num) {
  num % 2 === 0
  ? console.log('even')
  : console.log('odd')
})

// Exercise 5
function findIntegers(array) {
  array.filter(i => Number.isInteger(i));
}
/* this was my first attempt- returned undefined. I need an explicit return
statement */

function findIntegers(array) {
  return array.filter(i => Number.isInteger(i));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers);

// logged [1, 3, -4] to console! Yay!

// Exercise 6
function oddLengths(array) {
  return array.map(string => (string.length)).filter(num => num % 2 !== 0);
}
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); /* output [ 1, 5, 3 ] */
/* I just guessed that this was how you combine these methods with
arrow functions. My mind. */

// Exercise 7
function sumOfSquares(array) {
  return array.map(num => num * num).reduce((accumulator, element) => accumulator + element, accumulator = 0)
}
// This is long, how can I make this 2 lines instead of 1?
let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

// Exercise 8
function oddLengths (array) {
  return array.reduce((accumulator, element) => accumulator + element.length(), accumulator = 0)
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
/* Ok so this is very incorrect but y'all can't tell me this is the hardest 
** problem in the book and expect me to not take that challenge. I'm not
looking at the solution yet I'm coming back to it later LOL */

// Exercise 9
console.log(numbers1.includes(3)); // true
console.log(numbers2.includes(3)); // false
console.log(numbers3.includes(3)); // false

// Exercise 10
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 6