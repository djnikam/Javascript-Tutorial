
let newbtn = document.createElement("button");
newbtn.innerText = "Click me";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

let body = document.querySelector("body");
body.prepend(newbtn);

let para = document.createElement("p");
para.setAttribute("class", "classname");