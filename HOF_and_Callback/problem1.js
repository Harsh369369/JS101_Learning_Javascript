let arr = [1, 24, 57, 72, -19, -85, 100, 564];

let sum = arr.reduce(function (pre, curr) {
  if (Math.abs(curr) % 2 == 1) {
    pre += curr;
  }
  return pre;
}, 0);

console.log(sum);
