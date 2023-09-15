//Exercise1

//Guess the number


let number = Math.floor((Math.random()*100)+1)
let chances = 0
let i
while(i!=number){
    i = Number.parseInt(prompt("Enter the number"))
    if(i < number){
        console.log("Your number is lesser than real one. Enter again...")
    }
    else if(i > number){
        console.log("Your number is greater than real one. Enter again...")
    }
    chances += 1
}
console.log("You guessed the correct number...")
console.log(chances)
console.log(`Your score is ${100-chances}`)
console.log(`The correct number is ${number}`)


