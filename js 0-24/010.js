// while loop in js

// let n  = prompt("Enter the value of a")
n = "5"
n = Number.parseInt(n)
let i =0;
while(i<n){
    console.log(i)
    i++
}


//do while loop

//block run --> condition check
// at least execute one time
n = "5"
n = Number.parseInt(n)
let j =0;
do{
    console.log(j);
    j++;
}while((j<n))


//calculate factorial of given number

let a = 5;
factorial =1;
for(let i=1;i<=a;i++){
    factorial*=i
    console.log(factorial)
}
console.log(`factorial is ${factorial}`)