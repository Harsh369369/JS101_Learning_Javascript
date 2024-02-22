let arr = [3, 4, 5, 6, 7];
let str = "";

let newarr = arr.forEach(function (a, i) {
  if (a % 2 == 1 && i <= arr.length - 3) {
    str += a + "-";
  }
  if (a % 2 == 1 && (i == arr.length - 1 || i == arr.length - 2)) {
    str += a;
  }
});

console.log(str);
