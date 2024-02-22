let str = "Masai School";
console.log(strSubstring(str, -5, 2)); // calling of function
console.log(str.substring(-5, 2)); // calling of inbuilt function

function strSubstring(str, start, end) {
  if (str == undefined) return "plz enter the string";
  let newStr = "";
  if (start == undefined) start = 0;
  if (end == undefined) end = str.length;
  if (start < 0) start = 0;
  if (end < 0) end = str.length + end;
  for (let i = start; i < end; i++) {
    newStr += str[i];
  }
  return newStr;
}
