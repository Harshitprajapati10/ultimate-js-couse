//Arrays in JS

let marks = [87,99,68,54,null,false,"Not given"]
console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks[7]) //undefined

console.log("The length of list is",marks.length)

marks[1]=100
console.log(marks)

console.log(typeof marks)

for(let i = 0; i<marks.length;i++){
    console.log(`The marks are ${marks[i]}`)
}