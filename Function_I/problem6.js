let str = "Test";
str = caseSwap(str); //calling of function
console.log(str);

// swap the case of the string
function caseSwap(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (checkCase(str[i])) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}

// check whether the char is in uppcase or not
function checkCase(char) {
  if (char.toUpperCase() === char) {
    return true;
  }
  return false;
}
