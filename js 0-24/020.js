// Map, filter and reduce

// Map method -->returns a array

let arr = [65,45,34]
let a = arr.map((value, index, array)=>{ //create new array
    console.log(value, index, array)
    return value + index
})
console.log("New array is", a)

//Array filter method -->returns a array
let arr2 = [65,54,45,0,3,5,9]
let newArr = arr2.filter((a)=>{ //create new array of elements less than 10
    return a<10
})
console.log(newArr)


//Array reduce method --> returns a single element
let arr3 = [1,2,3,4,5]
/*
let added_item = arr3.reduce((item1,item2)=>{
    return item1 + item2
})*/
const sum_calc = (a,b)=>{
    return a + b
}
let added_item = arr3.reduce(sum_calc)
console.log(added_item)