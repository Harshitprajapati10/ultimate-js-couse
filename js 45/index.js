// classname and classlist

let first = document.getElementById("first")

// Adding class
// first.className = "textdark red"

console.log(first.classList)

// first.classList.remove("red")
// first.classList.add("yellow")

// first.classList.toggle("yellow") //laga hai to hata do else hata hai to laga do

console.log(  //return true or false
first.classList.contains("yellow"),
first.classList.contains("red")
)
