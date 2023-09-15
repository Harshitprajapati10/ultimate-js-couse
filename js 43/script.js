//HTML insertion methods

let a = document.getElementsByTagName("div")[0]

// a.innerHTML = a.innerHTML + "<h1>Hello World</h1>"

let div = document.createElement('div');
div.innerHTML = "<h1>Hello World</h1>"
// a.appendChild(div) //add a element "<div><h1>Hello world<h1><div>"

// a.append(div)

// a.prepend(div)

// a.after(div)

// a.before(div)

// a.replaceWith(div)