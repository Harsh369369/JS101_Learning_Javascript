let arr = [1, 2, 3, 4, 5];
console.log(includes(arr, 2, -2));
console.log(arr.includes(2, -2));

function includes(arr, ele, from) {
  if (arr == undefined) return "plz pass the array as argument";
  if (from == undefined) from = 0;
  if (ele == undefined)
    return "plz pass the element you want to search in array";
  if (from < 0) from = arr.length + from;
  for (let i = from; i < arr.length; i++) {
    if (arr[i] == ele) {
      return true;
    }
  }
  return false;
}
