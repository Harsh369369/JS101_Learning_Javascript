let cart = {
  data: [
    { name: "Rice", quantity: 2, price: 60 },
    { name: "Dal", quantity: 3, price: 50 },
    { name: "Salt", quantity: 1, price: 20 },
  ],
  total: function () {
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i].quantity * this.data[i].price;
    }
    return sum;
  },
};

console.log(cart.total());
