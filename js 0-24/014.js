// strings methods

let name = "Harshit"
console.log(name.length)

let name2 = "Harshi\"t" //can't count esc
console.log(name2.length)

console.log(name.toUpperCase()) //HARSHIT
console.log(name.toLowerCase()) //harshit

//slicing

console.log(name.slice(3,6))

console.log(name.slice(5))

// string methods

console.log(name.replace('Har','ar'))

let friend = "Naman"
console.log(name.concat(" is a friend of ",friend,' OK'))

let friend2 = "   Ha rry  " //trim beginning and end whitespaces
console.log(friend2.trim())


let fr = "shivika"
console.log(fr[0])
console.log(fr[1])
console.log(fr[2])
console.log(fr[3])
console.log(fr[4])
console.log(fr[5])
console.log(fr[6])
console.log(fr)


//Quick quiz: print string using for loop

for(i=0;i<fr.length;i++){
    console.log(fr[i])
}