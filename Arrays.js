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
// console.log(expensiveitem);

const arr = [10, 40, 60];
let ansArray = arr.map((item) => {
  return item + 1;
});
// console.log(ansArray);
// console.log(ansArray);

const sum = [10, 20, 30, 40];
let anser = sum.reduce((acc, curr) => {
  return acc + curr;
}, 0);
// console.log(anser);

const sortArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// sortArray.sort();
// console.log(sortArray);

// sortArray.reverse();
// console.log(sortArray);

// console.log(sortArray.indexOf(9));

let fun = (item) => {
  return item > 8;
};

// console.log(sortArray.find(fun));

// let forech = sortArray.forEach((value, index) => {
//   console.log("Number :", value, "Index", index);
// });

// for (let key in products) {
//   console.log(key);
// }

// const obj = {
//   name: "Rizwan",
//   age: 23,
//   height: "6feet",
// };
// for (let key in obj) {
//   console.log(key, " ", obj[key]);
//   // console.log(key);
// }

for (let val of sortArray) {
  // console.log(val);
}

let myName = "Rizwan Ejaz";
for (const iterator of myName) {
  // console.log(iterator);
}

let funArray = (element) => {
  let sum = 0;
  sortArray.forEach((element) => {
    sum = sum + element;
  });
  return sum;
};
let total = funArray(sortArray);
console.log(total);

