// Array Methods 2

/*
let num = [1,2,3,4,5,6,7,8,9]
let num2 = [1,2,3,4,5,56,6,7,8,9]
let num_more = [11,12,13,14,15,16,17,18,19]

console.log(num.length)
delete num[0] // Delete is a operator
console.log(num.length) //element deleted length unaffected
console.log(num) //[ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ]


let newArray = num2.concat(num_more)
console.log(newArray)
console.log(num2 ,num_more) //Older arrays remain unaffected
*/


//sort function

let array1 = [551,233,3,5,6,72,45]
array1.sort() //sort the original array alphabetically
console.log(array1)

let compare = (a,b)=>{
    return a-b //for descending order use b-a
}
array2 = [551,233,3,5,6,72,45]
array2.sort(compare)
console.log(array2)

//reverse method-> reverse the original array

array2.reverse()
console.log(array2)


//splice method--> modify original array

let array3 = [551,233,3,5,6,72,45]
// array3.splice(index, no of elements to removed, the elements)
// array3.splice(2, 3,1011,1012,1013)
deleted_items = array3.splice(2, 3,1011,1012,1013,1014)
console.log(array3)
console.log(deleted_items) //returns deleted items


//slice method -->slice and returns new array
let newArray = array3.slice(3)
console.log(newArray)
let newArray2 = array3.slice(3,6)
console.log(newArray2)