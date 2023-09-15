// primitive data types and objects in js
// primitive data types and objects(non primitive datatype) in js

// NN SS BB U

let a = null
let b = 34
let c = true //can also be false
let d = BigInt("567") + BigInt("3")
let e = "This is a string"
let f = Symbol("I am a nice symbol")
// let g = undefined
let g
console.log(a,b,c,d,e,f,g)

console.log(typeof e)


//objects in JS --> non primitive datatype

const item = {
    "Harry":45,
    "Harshit":null,
    "Lovish" : true,
    "Rohan": undefined
}
console.log(item)
console.log(item["Harshit"])
console.log(item["karan"]) //undefined