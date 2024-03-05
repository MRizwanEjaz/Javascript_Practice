for (let index = 0; index < 10 ; index++) {
    // console.log(index);
    
}
// console.log(index);

for(let i = 0; i<10; i++){
    const item = i;
    if(item == 5)
    {
        // console.log(`5 is best Number`);
    }
    // console.log(item);
}


for( let i = 0; i<10; i++){
    // console.log(`outer loop ${i}`);
for( let j = 0; j<10; j++){
       // console.log(`inner loop ${j} and outer loop ${i}`);
    //    console.log(i + '*' +j + '=' + i*j);
    }
}

let myarray = ["one","two","three"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
}

for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log(`detected ${index}`);//
        break;
    }
    console.log(index);//

}

for (let index = 0; index < 20; index++) {
    if(index==5){
        // console.log(`detected ${index}`);
        continue;
    }
    // console.log(index);
    
}

let score = 0;
while (score <=10) {
    console.log(score);//
    score = score+1;
}

let item = 1
do{
    console.log(item);
    item++
} while(item<10);

