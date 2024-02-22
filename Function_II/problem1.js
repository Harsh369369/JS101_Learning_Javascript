let arr = ["hello", "world", "bye"];
console.log(arrJoinFunction(arr, " ")); //calling of function

//function take arr and seperator as argument and return the arr in string
function arrJoinFunction(arr, seperator) {
  let bag = "";
  for (let i = 0; i < arr.length; i++) {
    bag += arr[i] + seperator;
  }
  return bag;
}
