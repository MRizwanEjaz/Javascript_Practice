const numArray = [1, 2, 3, 4, 5, 6];
// let num = console.log(numArray[3]);
// let num2 = console.log(numArray[numArray.length - 3]);

// numArray.push(7, 8);
// console.log(numArray);

// numArray.unshift(7, 8);
// console.log(numArray);

const fruitArray = ["applae", "kiwi"];
fruitArray.splice(1, 0, "grapes", "mango");
// console.log(fruitArray);

const items = [1, 2, 3, -1, -2, -3];
let newitem = items.filter((num) => num > 0);
// console.log(newitem);

const products = [
  {
    productA: "watch",
    price: 178,
    id: 1,
  },
  {
    productB: "airBuds",
    price: 700,
    id: 3,
  },
];

let expensiveitem = products.filter((items) => items.price > 500);
console.log(expensiveitem);
