// Exercise 1
person['name'];

// Exercise 2
// all

// Exercise 3
let myArray = {
  0: '4',
  1: '6',
  2: '3',
  3: '9',
  length: 4,
};

// Exercise 4
let myArrayUpper = Object.keys(myArray).toUpperCase
console.log(myArrayUpper)
// returned undefined let me try again

let objectKeys = Object.keys(myArray);
let objectKeysUpper = objectKeys.map((key) => key.toUpperCase());
console.log(objectKeysUpper);

// Exercise 5
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// Exercise 6
// neither- foo
// primitive- 'foo', 3.1415, false, undefined,
// object- [ 'a', 'b', 'c' ], function bar() { return "bar"; }, { a: 1, b: 2 }

// Exercise 7
myObj['qux'] = 3
/* the for/in loop iterates through an object as well as its prototype;
** the .forEach method iterates only through the object's own properties
** the first snippet will outout qux and the second will output qux as well
as each key from the prototype */

// Exercise 8
function copyObject(object, keys) {
  let objectNewCopy = {};
  if (keys) {
    keys.forEach(key => objectNewCopy[key] = object[key]);
    return objectNewCopy;
  } else {
    return Object.assign(objectNewCopy, object);
  }
}

// Exercise 9
/* this logs 'hi' and 'hello' to the console because the property a in the 
** mutable object foo was reassigned to 'hi'. The variable qux was also
** reassigned but the variable points to a string which is immutable, so it
remained 'hello.' */

// Exercise 10
// primiritve types- 1, 2, 'a', 'b', false, null
// objects- [1, 2, ["a", ["b", false]], null, {}]
//          ["a", ["b", false]
//          ["b", false]
//          {}

// Exercise 11
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj['bar'][3]['xyz'] = 6

// Exercise 12
function foo(bar) {
  console.log(bar, bar, bar);
}
let bar = foo
foo("hello");
bar("hi");

// Exercise 13
function foo(bar = welcome) {
  console.log(bar());
}

foo(function() { return "Welcome" });
foo(function() { return 3.1415 });
foo(function() { return [1, 2, 3] });

// Exercise 14
// variables - hello, greeting, xyzzy, howdy, foo
// object property names - a, b, c, d, 0, 1, 2 (index of array at xyzzy[c])
// primitives - '', 1, 2, 3, 4, 5, 'Hi', 'Grace ^ all of the above
// objects - hello, xyzzy, { a: 1, b: 2, c: [3, 4, 5], d: {} }, [3, 4, 5]

// Exercise 15
// variables - bar, arg1, arg1, foo, qux, result
// object property names - abc, def, ghi, jkl, mno, pqr, 0 , 1, 2, 3, 0, 1, 2
// primitives - 'Hello' 'Victor' 'Antonia' 1, 2, 3, 4, 5, 6, null, NaN abc,
  // def, ghi, jkl, mno, pqr, '0', '1', '2',
// objects - bar, qux, [1, 2, 3, [4, 5, 6]], [4, 5, 6]