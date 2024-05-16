hoist();

console.log(age);

function hoist() {
  console.log("Hello");
}

var age = 25;
// obj;

//show error because hoisting only done with var variable and plain function
// console.log(age);
// exppHoist();

// let age = 35;

// let exppHoist = function () {
//   console.log("hy");
// };

// class Human {}
// let obj = new Human();
