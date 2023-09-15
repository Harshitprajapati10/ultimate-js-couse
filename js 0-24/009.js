// for loops

// program to add first n natural numbers
/*
let sum = 0;
let number = 5
for(let i = 0; i<=number ;i++){
    sum+=i
}
console.log(sum)
*/

//calculate factorial


//for in loop

let obj = {
    harry:90,
    shubh:78,
    shiv:34
}
for(let a in obj){
    console.log("keys are",a)
    console.log(`Marks of ${a} are ${obj[a]}`)
}

// for of loop(Used for iteration)

for(let item of "Harshit"){
    console.log(`Item is ${item}`)
}
