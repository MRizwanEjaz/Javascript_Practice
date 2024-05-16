function getName(firstName, lastname) {
  let fullname = firstName + lastname;
  return fullname;
}
let fullname = getName("Mr", " " + "Rizwan");
console.log(fullname);

const square = function (num) {
  let ans = num ** 2;
  return ans;
};

function mythird() {
  console.log("Good night");
}
mythird();

let ans = square(9);
console.log(ans);
