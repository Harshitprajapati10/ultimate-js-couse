// Alert prompt and confirm

// let a = alert("This is a alert")
// console.log(a)  //returns undefined

// let b = prompt("This is prompt")
// console.log(b)

// let c = confirm("let this")
// console.log(c) //return true on OK and false on cancel



alert("Enter the value of a")
let a = Number.parseInt(prompt("Enter the value of a","100")) //100 is default argument
// document.write(a)
alert(`You entered ${a} of type `+(typeof a))


let write = confirm("Do you want it to write to the page")
if(write){
    document.write(a)
}
else{
    document.write("Please allow me to write")
}