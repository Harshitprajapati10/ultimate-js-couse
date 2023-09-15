// var let and const in js

var a = 45
let b = "harshit"
b = 34 // let is redeclared at same position in memory
var c = null
var d = undefined
{
    let b = "this" //block ke ander ki baat andar hi rahi, let is block scoped
    console.log(b)
}
console.log(b)

const author = "harshit"
// let author =45 throws an error because constant cannot be changed
// author =5 throws error

// const harry; throws error const is initialised during declaration unlike let and var