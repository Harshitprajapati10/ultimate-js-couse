// innerHTML and outerHTML

console.log(document.getElementsByTagName('span')[0])
console.dir(document.getElementsByTagName('span')[0]) //shows as object

console.log(document.body.firstChild.nodeName) //textnode
console.log(document.body.firstElementChild.nodeName) //SPAN

console.log(document.getElementById('first').innerHTML) //give tags also
document.getElementById('first').innerHTML = "<i>Hey I am italic</i>" //valid for element nodes only
console.log(document.getElementById('first').innerHTML)

console.log(document.getElementById('first').innerText)

//outerHTML

let x =document.getElementById('first').outerHTML
console.log(x)
first.outerHTML = "<div>Hey</div>"


console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)

console.log(document.body.textContent)



// $0.hidden = false







