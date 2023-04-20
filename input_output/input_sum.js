let rlSync = require('readline-sync');
let num1 = rlSync.question('Please enter a number: ');
let num2 = rlSync.question('Please enter another number: ');
let sum = Number(num1) + Number(num2);
console.log(`The sum of your numbers is ${sum}`);
