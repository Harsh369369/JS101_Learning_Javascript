var sales = [
  { item: "PS4 Pro", stock: 3, original: 399.99 },
  { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
  { item: "Nintendo Switch", stock: 4, original: 299.99 },
  { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
  { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 },
];

function calculateSalesTotals(sales) {
  for (let i = 0; i < sales.length; i++) {
    if (sales[i].discount != undefined) {
      console.log(sales[i].discount);
      sales[i].sale = sales[i].original - sales[i].original *         sales[i].discount;
    }else {
      sales[i].sale = sales[i].original;
    }

    console.log(sales[i].item);

    console.log(sales[i].original);

    console.log(sales[i].sale);

    console.log(sales[i].stock);

    console.log(sales[i].sale * sales[i].stock);
    console.log();
  }
}

calculateSalesTotals(sales);
