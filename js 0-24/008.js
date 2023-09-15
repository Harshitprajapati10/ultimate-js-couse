//chapter 2 practice set

// Q1
// let age = 19;
// console.log(age>10 && age<20)

//Q2
const readline = require("readline")
const r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})
// r1.question("Enter your age?",(a)=>{
//     a = Number.parseInt(a)
//     switch (a) {
//         case a>18:
//             console.log("drive")
//             break
//         case a<18:
//             console.log("cannot drive")
//             break;
//         default:
//             console.log("invalid age")
//     }
// })


//Q3

// r1.question("Enter a number",(num)=>{
//     if(num%2==0 && num%3==0){
//         console.log("Number is divisible by 2 and 3")
//     }
//     else{
//         console.log('not divisible')
//     }
// })

// Q4

// r1.question("Enter a number",(num)=>{
//     if(num%2==0 || num%3==0){
//         console.log("Number is divisible by 2 or 3")
//     }
//     else{
//         console.log('not divisible')
//     }
// })



//Q5
// r1.question('Enter your age',(age1)=>{
//     console.log((age1>18)?"You can drive":"You cannot drive")
// }) 