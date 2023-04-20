// Exercise 1
let rlSync = require('readline-sync');
let name = rlSync.question('What is your name? ');
console.log(`Hello, ${name}!`);

// Exercise 2
let rlSync = require('readline-sync'); /* If i have done this once on a code file,
** outside of a block, does it need to be done again on the same file? */
let firstName = rlSync.question('What is your first name? ');
let lastName = rlSync.question('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

// Exercise 3
let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);