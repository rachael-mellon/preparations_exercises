// Exercise 5
function randomNumberBetween(min, max) {
  result = Math.floor(Math.random() * (max - min + 1) + min);
  for (let tries = 0; result <= 2; tries +=1) {
    console.log(`It took ${tries} tries to get a number greater than 2`);
  }
}

randomNumberBetween(1, 6);