lst = [`s` , `w` , `g`];

chances = 1;
user_point = 0;
computer_point = 0;

const winner_checker = (your_choice,computer_choice) => {
    if(your_choice == computer_choice){
        return "Tied"
    }
    else if(your_choice =='s' && computer_choice == "w"){
        return "User Win" //true for users win
    }
    else if(your_choice =='s' && computer_choice == "g"){
        return "Computer Win" //false for computer's win
    }
    else if(your_choice =='w' && computer_choice == "s"){
        return "Computer Win"
    }
    else if(your_choice =='w' && computer_choice == "g"){
        return "User Win"
    }
    else if(your_choice =='g' && computer_choice == "s"){
        return "User Win"
    }
    else if(your_choice =='g' && computer_choice == "w"){
        return "Computer Win"
    }
}

const winner_decider = (user_point, computer_point)=>{
    if(user_point == computer_point){
        alert(`Game Tied because both have ${user_point} points`)
    }
    else if(user_point>computer_point){
        alert(`You win by ${user_point-computer_point} points`)
    }
    else if(computer_point>user_point){
        alert(`computer win by ${computer_point-user_point} points`)
    }
}

alert("Are you ready to play Snake water gun game")
while(chances<=10){
    random_int = Math.floor(Math.random()*(lst.length));
    // console.log(lst[random_int]);
    computer_choice = lst[random_int]
    user_choice = prompt("Your choice is:","s")
    if(winner_checker(user_choice, computer_choice) == "User Win"){
        user_point++
        alert(`User win this time \nUsers point is: ${user_point} \nComputers point is: ${computer_point}\nComputer's choice is: ${computer_choice}\nUsers choice is: ${user_choice}`)
    }
    else if(winner_checker(user_choice,computer_choice)== "Tied"){
        alert(`Tied this time \nUsers point is: ${user_point} \nComputers point is: ${computer_point}\nComputer's choice is: ${computer_choice}\nUsers choice is: ${user_choice}`)
    }
    else if(winner_checker(user_choice,computer_choice)== "Computer Win"){
        computer_point++
        alert(`Computer win this time\nUsers point is: ${user_point} \nComputers point is: ${computer_point}\nComputer's choice is: ${computer_choice}\nUsers choice is: ${user_choice}`)
    }
    else{
        alert(`Invalid input\nYou have wasted one chance\n please write one of s,w,g`)
    }
    alert(`You have ${10-chances} chances left`)
    chances++;
}


alert("Game over go to results")
alert(`Your points are: ${user_point}\nComputer's points are: ${computer_point}`)
winner_decider(user_point, computer_point)

