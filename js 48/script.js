// Handling browser events

let btn = document.getElementById("btn")

let x = (e) => {
    console.log(e) //pointer event object
    console.log(e.target) //give button
    console.log(e.type, e.clientX, e.clientY)  //click 59 14
    alert("Hello World 1")
}
let y = (e) => {
    console.log(e)
    alert("Hello World 2")
}

btn.addEventListener("click",x)

// btn.addEventListener("click",y)

// let a = prompt("What is your favourite number?")

// if(a=="2"){
//     btn.removeEventListener("click",x) // pass same function object
// }