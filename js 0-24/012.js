// Chapter 3- practice set


// Q1
let obj = {harry:98, Rohan:70, aakash:90}

console.log(Object.keys(obj)) //create a array of keys
console.log(Object.values(obj)) //create array of values

for(let i=0;i<Object.keys(obj).length;i++){//i<3
    console.log(`The marks of ${Object.keys(obj)[i]} are ${Object.values(obj)[i]}`)
}


//Q2
for(let key in obj){ //return keys of list
    console.log(`Marks of ${key} are ${obj[key]}`)
}

//Q3
/*
 let cn = 4
 let i 
 while(i!=cn){
    i = prompt("Enter a number")
    console.log("Try again")
 }
 console.log("YOU have entered the correct number")
 */

 //Q4
 const mean_calculator = (a,b,c,d,e)=>{
    return (a+b+c+d+e)/5
 }
 mean = mean_calculator(12,13,10,7,8)
 console.log(mean)