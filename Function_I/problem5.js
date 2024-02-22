let arr = ["MA", "SA", "I", "SCH", "OOL"];
arr = arrLowerCase(arr);
console.log(arr);

function arrLowerCase(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(lowerCase(arr[i]));
  }
  return newArr;
}

function lowerCase(str) {
  return str.toLowerCase();
}