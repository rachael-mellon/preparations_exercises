function containsThree(array) {
  return array.forEach(num => num === 3);
}
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(containsThree(numbers1));
