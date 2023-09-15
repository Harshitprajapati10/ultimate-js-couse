// Settimeout and setInterval

//Settimeout --> performs the work after some time




// alert("Hello")

/*
let a = setTimeout(function(){
    alert("I am inside of setTimeout")
},5000) // alerts after 5 secs

let b = prompt("Do you want to run settimeout?")
if(b=="n"){
    clearTimeout(a)
}
console.log(a) //returns timer id
*/

const sum = (a,b) => {
    console.log("Hey I am running")
    console.log(a + b)
}
// let timerId = setTimeout(sum, 2000,2,3) //do this task after 2 secs

// let timerId = setInterval(sum, 2000,2,3) //repeat karte raho

// setInterval(function(){
    // alert("Set interval")
// },3000)

/*
let a = setInterval(function(){
    alert("This is setinterval")
},3000)
let b = prompt("do you want to run setinterval?")
if(b=="n"){
    clearInterval(a)
}
console.log(a)
*/