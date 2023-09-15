// chapter 8 Ps

//Q1 show different alerts when diff buttons are clicked
//HTML approach

//<button onclick="alert('first clicked')">one</button>
//<button onclick="alert('second clicked')">two</button> 


//Q2 create a website which is capable of storing bookmarks
/*
 <h1>Bookmarks</h1>
<a href="https://www.youtube.com"><button>youtube</button></a>
*/

//Q3 last ques with event listeners

/*
let button = document.getElementsByTagName("button")[2]
button.addEventListener('click',()=>{
    window.location="https://www.google.com"
    window.focus()
})
*/

//Q4 Ignore for now

//Q5 create a glowing bulb effect using classlist toggle
setInterval(() => {
   document.querySelector("#bulb").classList.toggle("bulb")
}, 1000);