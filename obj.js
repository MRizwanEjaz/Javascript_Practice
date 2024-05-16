const obj = {
  name: "Rizwan",
  age: "23",
  height: "6 feet",
  greet: function () {
    console.log("Good Morning");
  },
  lastname: "Ejaz",
};
let a = console.log(obj.greet);
console.log(obj.lastname);
console.log(a);

//obj cloning
let src = {
  name: "Rizwan",
  age: "23",
  height: "6 feet",
};

let src2 = {
  value: "RizwanNofill",
};

// let dest = { ...src,};
let dest = Object.assign({}, src, src2);

// src.color = "white";

console.log(src);
console.log(dest);
