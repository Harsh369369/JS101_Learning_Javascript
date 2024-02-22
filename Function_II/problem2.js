// here below in lastindexof() we have to pass three argument in which //first argument is the number for which we are searching
//second argument is the array in which we want to search
//third argument is the index from which we want to start searching

let arr = [1, 2, 5, 3, 1, 7, 2, 6, 4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(lastindexof(4, arr, 9)); // calling of function
console.log(arr.lastIndexOf(4, 9)); // calling of inbuilt function

// function to find last index of element
function lastindexof(value, arr, from) {
  if (arr == undefined || value == undefined)
    return "plz enter the array or value you wan't to search for";
  let index = -1;
  from != undefined ? (length = from) : (length = arr.length - 1);
  for (let i = length; i >= 0; i--) {
    if (arr[i] == value) {
      return i;
    }
  }
  return index;
}
