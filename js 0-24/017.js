// Array methods 1

let num  = [34,5,76,8,90]
console.log(num, typeof num)

let b = num.toString(num)
console.log(b, typeof b)

let c = num.join(" and ")
console.log(c, typeof c)

let r = num.pop()
console.log(num) //remove last element from array
console.log(r) //returns popped element


let s = num.push(12)
console.log(s) // returns new length of array
console.log(num) // add a element to end of array

let t = num.shift()
console.log(t) // retuns removed element from the beginnning
console.log(num) //remove an element from beginning of the array


let u = num.unshift(56)
console.log(u) //give length of array
console.log(num) // add 56 to beginning of the array