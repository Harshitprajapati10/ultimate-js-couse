//matches, closest,  contains

// console.log(id1)  //give element

let id1 = document.getElementById("id1")
console.log(id1)
console.log(id1.matches(".class")) //if class matches then return true else false
console.log(id1.matches(".box"))


console.log(id1.closest(".box"))
console.log(sp1.closest("#sp1")) //element returns itself if not found then go to parent

console.log(id1.contains(sp1))  //true
console.log(sp1.contains(sp1))  //true
console.log(sp1.contains(id1))  //false