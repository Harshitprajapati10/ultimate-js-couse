console.log(console) //log the console object


console.log("print this statement")
console.error("Print a error messsge")

console.assert(5>7)//throws error when condition is false
console.assert(555>5) // executes smoothly when condition is true
console.assert //tells about this function

// console.clear() // clears the whole console

obj = {a:3,b:6,c:7,d:9}
console.table(obj) //shows key value pair of object in tabular form


console.warn("please give a warning in yellow color")

console.info("This is same as console.log but shows in info section")


console.time("print")
console.timeEnd("print")//returns time in ms to execute print


//calculating time to execute for loop
console.time("forLOOP")
for(let i = 0; i<5; i++){
    console.log("code")
}
console.timeEnd("forLOOP")

//calculating time to execute while loop

console.time("While loop")
let i = 0
while(i<5){
    console.log("code")
    i++;
}
console.timeEnd("While loop")