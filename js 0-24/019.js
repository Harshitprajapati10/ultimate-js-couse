//using loops with js arrays

let num = [3,45,6,7,8,5]
for(let i = 0; i<num.length; i++){
    console.log( "Element of list is" ,num[i])
}


//For each loop

num.forEach((element)=>{
    console.log(element*element)
})

// array.from --> convert HTML collections to array

let name = "Harshit"
let arr = Array.from(name)
console.log(arr)


//for of loop --> returns element of array

for(let item of num){
    console.log(item)
}

//for in loop --> returns keys(indexes) of array
for(let item in num){
    console.log(`Item at ${item} index is ${num[item]}`)
}