// Accessing children of the element

//child nodes->head and body are child nodes of html
//sibling --> p and span are siblings
//descendent elements --> andar wale saare

//firstchild, lastchild, childNodes

console.log(document.body.firstChild) //text node also counts in it //returns first child
console.log(document.body.childNodes[0]) //returns first child
 
console.log(document.body.lastChild) //return last child
console.log(document.body.childNodes[document.body.childNodes.length-1]) //return last child

console.log(document.body.childNodes) //return nodelist  of nodes
let arr = Array.from(document.body.childNodes)
console.log(arr) //convert it into a list

console.log(document.body.hasChildNodes()) //return true if child nodes are present
                                 

