// element only navigation

let b = document.body
console.log("first child of b is", b.firstChild) //give text node also
console.log("first element child of b is", b.firstElementChild) //give first element child

let s  = document.getElementById("middle")
console.log(s)
console.log(s.previousElementSibling) //gives previous sibling which is an element
console.log(s.nextElementSibling)


const changebodyred = ()=>{
    document.body.firstElementChild.firstElementChild.style.background = "red"
}
changebodyred()

let items = Array.from(document.body.firstElementChild.firstElementChild.childNodes)
console.log(items)
