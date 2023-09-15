// Conditionals in javascript


const readline = require('readline')
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
/*
r1.question('Enter your age?',(age)=>{
    if(age>18){
        console.log('Eligible')
    }
    else{
        console.log("not eligible")
    }
})
*/


let a = '21'
// console.log(typeof a)
a = Number.parseInt(a) //typecasting
// console.log(typeof a)
if(a<0){
    console.log("This is a invalid age")
}
else if(a<9){
    console.log("You are a kid")
}
else if(a<18 && a>=9){
    console.log("You are a kid and think of driving after 18")
}
else{
    console.log('You can drive')
}

 

//explore switch statement and write basic program

const exp = "papayas"
switch (exp) {
    case "oranges":
        console.log("oranges")
        break;
    case "mangoes":
    case "papayas":
        console.log("mangoes and papayas")
        break;
    default:
        console.log("Not")
}


//ternary operator

console.log("You can",a<18?"not drive":"drive")