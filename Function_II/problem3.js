//here below in slice() function we have to pass three argument in which //first argument is the array in which we want to slice
//second argument is the start index from which index we want to slice
//third argument is the end index upto which index we want to slice

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrSlice(arr, -5, -2)); // calling of function
console.log(arr.slice(-5, -2)); // calling of inbuilt function

// function to slice the array
function arrSlice(arr, start, end) {
  if (arr == undefined) return "plz enter the array";
  let newArr = [];
  if (start == undefined) start = 0;
  if (end == undefined) end = arr.length;
  if (start < 0) start = arr.length + start;
  if (end < 0) end = arr.length + end;
  for (let i = start; i < end; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
