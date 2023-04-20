// Exercise 1
let concatenate = 'John ' + 'Doe';

// Exercise 2
//finds ones place digit
let number = 4936;
let ones = number % 10;
number -= ones;
number /= 10;
console.log(ones);
// rather than hard coding the rest of this could you use a while loop?
// finds tens place digit
let tens = number % 10;
number -= tens;
number /= 10;
console.log(tens);
// finds hundreds place digit
let hundreds = number % 10;
number -= hundreds;
number /= 10;
console.log(hundreds);
// finds thousands place digit
let thousands = number % 10;
number -= thousands;
number /= 10;
console.log(thousands);

// Exercise 3
/* for this exercise I identified the data type on my own first,
then typed the following solely for practice with the typeof command*/
console.log(typeof 'true');
console.log(typeof false);
console.log(typeof 1.5);
console.log(typeof 2);
console.log(typeof undefined);
console.log(typeof {foo: 'bar'});

// Exercise 4
/* Implicit type coercion: if two items are being concatenated
and one is a string, the concatenated value returned will be a string*/

// Exercise 5
// Explicitly coercing a String to a Number
console.log(Number('5') + 10);

// Exercise 6
// Interpolating with template literal syntax
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// Exercise 7
/* No, there will not be an error, but since there are more than 3
values in the array, Javascript will retun undefined */

// Exercise 8
names = [
  'asta',
  'butterscotch',
  'pudding',
  'neptune',
  'darwin'
]; /* Should an array be formatted like this (like objects) or just one line? */

// Exercise 9
let pets = {
  astra: 'dog',
  butterscotch: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
};

// Exercise 10
/* this expression retuns false because the case of the first
character in the second string is different. */

// Exercise 11
/* this expression will return the Number 3. parseInt coerces a string
to an integer (no decimals). */

// Exercise 12
/* This expression will evaluate to true. Since the two values are 
*** strings, JavaScript will evaluate the first character in each, 
and 1, the first character of the left string is < 9. */