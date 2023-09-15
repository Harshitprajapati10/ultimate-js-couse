// ch5 practice set

// Q1-->Add numbers to the array

/*
let arr = []
let len = Number.parseInt(prompt("The length is"))
for(let i =0; i<len;i++){
    let value = Number.parseInt(prompt("Number to pushed"))
    arr.push(value)
}
console.log(arr)
*/


//Q2 --> keep adding numbers until 0 is pressed

/*
let arr =[]
let a
do{
    a = Number.parseInt(prompt("Give me the number"))
    arr.push(a)
}while(a!=0)
console.log(`The length of ${arr} is ${arr.length}`)
console.log(arr)
*/

//Q3 ==> filter for numbers divisible by 10

/*
let arr= [12,10,14,15,20,30,67,96,100]
let newarr = arr.filter((item)=>{
    return item %10==0
})
console.log(newarr)
*/

//Q4 --> create array of square of given numbers

/*
let num = [2,3,4,5,6,7]
let newArr = num.map((a)=>{
    return a**2
})
console.log(newArr)
*/


// Q5
//create factorial of given number using reduce method

let n = Number.parseInt(prompt("The number is"))
let arr = []
for(let i = 1; i<=n ;i++){
    arr.push(i)
}
let factorial = arr.reduce((num1,num2)=>{
    return num1*num2
})
console.log(factorial)