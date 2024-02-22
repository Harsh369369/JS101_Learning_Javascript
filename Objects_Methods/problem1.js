let rectangle = {
  width: 9,
  height: 18,
  area: function () {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
};

console.log(rectangle.area());
console.log(rectangle.perimeter());
