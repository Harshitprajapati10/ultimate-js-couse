// Attribute methods

let first = document.getElementById("first")

let a = first.getAttribute("class")
console.log("class of first is",a)

console.log(first.hasAttribute("class"))  //true if attribute present
console.log(first.hasAttribute("style"))

// first.setAttribute("hidden",true) //hidden the first element

// first.setAttribute("class","true such") //give classes

// first.removeAttribute("class")

// console.log(first.attributes)  //give all attributes



// creating custom attribute


console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)