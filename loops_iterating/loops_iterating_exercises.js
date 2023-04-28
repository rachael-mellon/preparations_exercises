// Exercise 1
let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
for (futureYears = 10; futureYears <= 40; futureYears += 10) {
  console.log(`In ${futureYears} you will be ${age + futureYears}`)
}

// Exercise 2
function factorial(n) {
  let result = 1;
  for (let counter = n; counter > 0; counter -=1) {
    result *= counter;
  }
  return result;
}
console.log(factorial(5));

// Exercise 3
/* this produces an infinite loop becasue the variable counter is reassigned
** to the value 1 inside of the while loop, so it will always return the
** value it was reassigned, and the while condition will always be truthy
because the value will always be 1 */

// Exercise 4
/* this does not produce an error because not all 3 components of the 
** for statement are always necessary, and the variable initialized in the
** for statement gets incremented in the next statement anyway */

// Exercise 5
function randomNumberBetween(min, max) {
  result = Math.floor(Math.random() * (max - min + 1) + min);
  for (let tries = 0; result <= 2; tries +=1) {
    console.log(`It took ${tries} tries to get a number greater than 2`);
  }
}

/* This was my first attempt, I don't know exactly what's wrong with it.
** node does not output an error message but when I call the function, 
nothing logs to the console. */

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater 2');

/* I don't fully understand this solution because weren't we supposed
** to not call the function again? This just changes it to a do/while loop
rather than a regular while loop but still calls the function again. */

// Exercise 6
function factorialRecursive(n) {
  if (n ===1) {
    return 1;
  }
  return n * factorialRecursive(n - 1)
}

/* This is a little confusing. It is kind of like the function just stores
** the parameter like a variable; 