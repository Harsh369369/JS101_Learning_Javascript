let sum = 0,
  avg;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
avg = arrAverage(arr);
console.log(avg);

function arrSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
}

function arrAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  arrSum(arr);
  return sum / arr.length;
}
