// Exercise 1
/* false
** true
** 3
** 3
** false
** true
** false
** false
** false
** true
** false
true */

// Exercise 2 & 3
function evenOrOdd (num) {
  if (!Number.isInteger(num)) {
    console.log('Error');
    return;
  }
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

// Exercise 4
/* The output on the console will be 
** Product2 
** Product3
** Product not found!
because no break was included in the switch statement */

// Exercise 5
if (foo()) {
  return 'bar';
} else {
  return qux();
}

// Exercise 6
// This function will log to the console 'Not Empty' because empty arrays are truthy values

// Exercise 7
function capital(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

// Exercise 8
// for extra practice I changed the function to switch format rather than if else format
function numRange(num) {
  switch (num) {
    case [num < 0]:
      console.log(`${num} is less than 0`);
      break;
    case [num <= 50]: 
      console.log(`${num} is between 0 and 50`);
      break;
    case [num <= 100]: 
      console.log(`${num} is between 51 and 100`);
      break;
    default:
      console.log(`${num} is greater than 100`);
      break;
  }
}

// Exercise 9
/* false
** true
** 3
** false
** 3
** 3
** undefined
** null */

// Exercise 10
/* foo is 5, bar is 7
** foo is 0, bar is 0
** foo is 4, bar is 42
** foo is 3, bar is 42 */