console.log(absoluteValue(12, 4)); //input 1
console.log(absoluteValue(4, 18)); //input 2

// to find diffrence between two value
function diffFunction(a, b) {
  return a - b;
}
// return the absolute value
function absoluteValue(a, b) {
  return Math.abs(diffFunction(a, b)); //calling of diffrence function
}