// Chapter 1 practice set

//Q1
let string1 = "harshit"
let num = 34
console.log(string1 + num) //harshit34

//Q2
console.log(typeof string1, typeof num, typeof (string1+num))

//Q3
const a = {
    name : "Harry",
    section : 1,
    isPrincipal: false
}
// a = 54 //cannot change
 
//Q4 --> adding/changing a key to object

a['friend'] = "shubham"
a['name'] = "karan"
console.log(a)

//Q5

const dict = {
    appreciate :"recognise the full worth of",
    ataraxia : "anaxiety",
    yakka : "work specially hardwork"
}
console.log(dict.yakka)
console.log(dict["yakka"])