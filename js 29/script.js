console.log("This is chapter 6 ps")


// Q1--> Take age as input and tell whether he can drive or not
/*
let age = Number.parseInt(prompt("Enter your age..","20"))

const candrive = (age)=>{
    return age>18?true:false
}
if(candrive(age)){
    alert("You can drive")
}
else{
    alert("You cannot drive")
}
*/
// Q2--> In ques 1 use confirm to ask the user if he wants to see prompt again

/*
let runagain = true
const candrive = (age)=>{
    return age>18?true:false
}
while(runagain){
    age = Number.parseInt(prompt("Enter your age..","20"))
    if(candrive(age)){
        alert("You can drive")
    }
    else{
        alert("You cannot drive")
    }
    runagain = confirm("Do you want to play again...")
}
*/

//Q3 --> In previous question use console.error if age is negative

/*
let runagain = true
const candrive = (age)=>{
    return age>18?true:false
}
while(runagain){
    age = Number.parseInt(prompt("Enter your age..","20"))
    if(candrive(age)){
        alert("You can drive")
    }
    else if(age<0){
        console.error("Wrong input")
        break
    }
    else{
        alert("You cannot drive")
    }
    runagain = confirm("Do you want to play again...")
}
*/

//Q4 --> go to google.com if number is greater than 4


/*
let number = Number.parseInt(prompt("Enter the number..","20"))
if(number>4){
    location.href = "https://youtube.com"
}
 */

//Q5 change the bg color according to input

let color = prompt("The color is")
document.body.style.background = color