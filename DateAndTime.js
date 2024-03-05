let mydate = new Date()
// console.log(mydate);
// console.log(Date.now());

// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());

let newdate = Date(2024,0,4,5,6)
// console.log(newdate);

console.log(mydate.toDateString());
let mycreatedDate = new  Date("01-13-2024")

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let anothernewdate = new Date()
// console.log(anothernewdate.getDay());
//First Month starts from 0
// console.log(anothernewdate.getMonth()+1);
// console.log(anothernewdate.getFullYear());

anothernewdate.toLocaleDateString('default',{
    weekday:"long" ,
    
})
console.log(anothernewdate);




