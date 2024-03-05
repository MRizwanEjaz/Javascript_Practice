let cryptosymbol = Symbol("DefiKey");


let user = {
    [cryptosymbol]:"Bitcoin",
    name: "Rizwan",
    age:23,
    isWebsite: false,
    email:"rizwan@dEvsync@gmail.com",
    loggedin: ["Monday","Friday"],
    jsuser:["arrays","Function","Objects","Events"]
}
// console.log(user["jsuser"]);
// console.log(user.age);
// console.log(user[cryptosymbol]);
// console.log(typeof user[cryptosymbol])


Object.freeze(user)
user.email = "rizwan@gamil.com"
// console.log(user.email);

user.salary = function(){
    usersallry = 300000;
}
// console.log(user.salary);
user.location = "Citycenter Gulberg"
// console.log(user);
// console.log(user.location);

let myobject1 = {name1:"Rizwan",age:19}
let myobject2 = {name2:"Ejaz",age:50}
let object3 = [...myobject1,...myobject2]
console.log(object3);