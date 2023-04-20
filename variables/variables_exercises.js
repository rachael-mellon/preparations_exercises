// Exercise 1
let name = 'Victor';
console.log(`Good Morning, ${name}`);
console.log(`Good Afternoon, ${name}`);
console.log(`Good Evening, ${name}`);

// Exercise 2
let age = 24;
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);

// Exercise 3
/* This code will produce an error because the variable foo is only defined
within the previous block; out side of the block the variable was not initialized */

// Exercise 4
/* The code will run until line 6; there will be an error because the constant
variable was attempted to be reassigned */

// Exercise 5
/* this will log 'bar' to the console. Although the variable foo was assigned the 
** string 'qux' inside of a block, it was assigned the string 'bar' outside of the block; 
** console.log was called outside of the block, JavaScript will use the data stored in
the variable outside of the block. */

// Exercise 6
/* This will not produce an error because const variables have block scope.
** the constant variable was reassigned within a block, but this does not affect
** the assignment out of the block. */