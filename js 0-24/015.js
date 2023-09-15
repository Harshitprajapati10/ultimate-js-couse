//chapter 4- practice set

//Q1

console.log("har\"".length) //4


//Q2 some string functions

const sentence = "The quick brown fox jumps over the lazy dog"
const word = "fox"
console.log(sentence.includes(word)) //returns true if word is in string
console.log(`The word "${word}" ${sentence.includes(word) ? "is":"is not"} in the sentence`)

console.log(sentence.startsWith("The quick")) //returns true if string startswith given
console.log(sentence.endsWith("lazy dog")) //returns true if string endswith given


//Q3
let string1 = "HARSHIT"
console.log(string1.toLowerCase())


//Q4
let str2 = "Please give me Rs 1000"
let amount = Number.parseInt(str2.slice(("Please give me Rs".length)+1))
console.log(amount)


//Q5
//string is immutable
let friend = "deepika"
friend[3]="r"
console.log(friend) //not change as string is immitable`