printOdd(100); // calling of function


// function to check odd number
function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  }
  return false;
}

// function to print odd number
function printOdd(num) {
  for (let i = 1; i <= num; i++) {
    if (isOdd(i)) {
      console.log(i);
    }
  }
}
