
// prepand method use in js
let heading = document.createElement("h1");
heading.innerHTML = "<i>Hello I am Dhanraj Nikam..........</i>"
let body = document.querySelector("body");
body.prepend(heading) 

// USe of queryselectorall
let divs = document.querySelectorAll(".box");

changeName = ()=> {

    let idx = 1;
    for(div of divs){

        div.innerText = `This is div no. ${idx}`;
        idx++;
    }
}

// creating button using the js
let newbtn = document.createElement("button");
newbtn.innerText ="Click me Button";
let div5 = document.querySelector("#btn");
div5.append(newbtn);

// Method to chnage the color of div 
changeColor = ()=>{
    let div6 = document.querySelector("#btn");
    div6.style.backgroundColor = "red";
}

// Setting onclick attribute dynamically
newbtn.setAttribute("onclick", "changeColor()");

