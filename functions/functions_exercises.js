// Exercise 1
/* this code will log 1 to the console. The variable bar is assigned the value 1 
** outside of the function, and the call to print the variable bar is also outside
** of the function, so the variable bar assigned within the function does not affect
the variable outside of the function */

// Exercise 2
function getInput(prompt) {
  let rlSync = require('readline-sync');
  let input = rlSync.question(prompt);
  return input;
}

let firstName = getInput('What is your first name? ');
let lastName = getInput('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}`);

// Exercise 3
function multiply(a, b) {
  return a * b;
}

let num1 = getInput('Please enter a number ');
let num2 = getInput('Please enter another number ');
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);

// Exercise 4
/* this code will not output anything to the console. The return statement does not 
** have a value to return, so it will return undefined and terminate the function. 
** The console.log call occurs after this return statement, after the function is 
already terminated so JavaScript will not carry it out */

// Exercise 5
/* this code will also not log anything to the console; it included no console.log
** command. This code will store the return value of 'Yipeee!!!!' but will not do 
anything else with that value */

// Exercise 6
// the function arguments on line 1 are num1, num2, num3
/* the function body is everything between the curly brackets: {
  let result = num1 * num2 * num3;
  return result;
} */
// the function declaration is line 1 to line 4
// the function is invoked on line 6 let product = multiplyNumbers(2, 3, 4);
// the function name is multiplyNumbers
// the function has 3 parameters: num1, num2, and num3
/* the function return value is the result of multiplying the 3 arguments inputted, 
in this example the arguments 2, 3, and 4 return 2 * 3 * 4, or 24 */
/* this function has 2 global variables and 3 local variables. 
** the global variables are product, and the function multiplyName
the local variables are the parameters inside the function: num1, num2, and num3 */

// Exercise 7
/* this code will log 'Hello' and undefined to the console. The function takes 2
** arguments and logs both to the console. Only one argument was passed, so that
** argument will be logged, and the other parameter will remain undefined, so
the function will also log undefined */

// Exercise 8
/* this code will log 42 and 3.1415 to the console. The function only takes 2 arguments,
and was passed 3, so it will take the first 2 arguments, and ignore the third. */

// Exercise 9
/* all variables: 
** multiply
** left, right
** product
** getNumber
** prompt
** parseFloat
** question
** left
** right
** console
*/

// Exercise 10
/* global variables: multiply, getNumber, parseFloat, question, left (line 10), 
right (line 11), console 
local variables: left (line 1), right (line 1), product, prompt */

// Exercise 11
/* the left and right variables on line 1 are different from the left and right 
** variables on lines 10 and 11. The variables in line 1 are local variables; they 
** are parameters for the multiply function and are not defined outside of the function.
** The left variable on line 10 is a global variable defined outside of the function
** as the value of getNumber('Enter the first number: '); and the right variable on 
** line 11 is a global variable defined outside of the function as the value of 
getNumber('Enter the second number: '); */