//ch 7 practice set

//Q1-->create a navbar and change its first element red

// let listitem = document.getElementsByClassName("listitem")[0]
// listitem.style.color = "red"


//Q2-->Create a table without tbody use view page source to check it has tbody or not
// answer--> view page source not show tbody but inspect shows tbody

// Q3 --> create a element with three children and change color of first and last to green

// document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green"
// document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green"

//Q4--> change all li to bg cyan

Array.from(document.querySelectorAll(".listitem")).forEach((item)=>{
    item.style.background = "cyan"
})