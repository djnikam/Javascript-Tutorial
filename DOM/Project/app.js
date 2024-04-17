
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let result = document.querySelector("#result");
let user_score = document.querySelector("#userscore");
let comp_score = document.querySelector("#compscore");

let userscore = 0;
let compscore = 0;

// function to get the rand value in the expected range
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*
    0 => rock
    1 => paper
    2 => scissors
*/

user_score.innerText = 'You : 0';
comp_score.innerText = 'Comp : 0';

rock.addEventListener("click", ()=>{
    rock.classList.add("choice2");
    let compchoice = getRandomInt(3);
    
    if(compchoice == 2){
        result.innerText = "You Win!😀 Rock beats scissors!";
        result.style.backgroundColor = "green";
        userscore++;
    }else if(compchoice == 1){
        result.innerText = "You lose!☹️ Paper beats rock!";
        result.style.backgroundColor = "red";
        compscore++;
    }else{
        result.innerText = "Draw!😊";
        result.style.backgroundColor = "yellow";
    }

    user_score.innerText = `You : ${userscore}`;
    comp_score.innerText = `Comp : ${compscore}`;
});

paper.addEventListener("click", ()=>{

    paper.classList.add("choice2");

    let compchoice = getRandomInt(3);
    
    if(compchoice == 0){
        result.innerText = "You Win!😀 Paper beats rock!";
        result.style.backgroundColor = "green";
        userscore++;
    }else if(compchoice == 2){
        result.innerText = "You lose!☹️ Scissors beats paper!";
        result.style.backgroundColor = "red";
        compscore++;
    }else{
        result.innerText = "Draw!😊";
        result.style.backgroundColor = "yellow";
    }

    user_score.innerText = `You : ${userscore}`;
    comp_score.innerText = `Comp : ${compscore}`;
});

scissors.addEventListener("click", ()=>{

    scissors.classList.add("choice2");

    let compchoice = getRandomInt(3);
    
    if(compchoice == 1){
        result.innerText = "You Win!😀 Scissors beats paper!";
        result.style.backgroundColor = "green";
        userscore++;
    }else if(compchoice == 0){
        result.innerText = "You lose!☹️ Rock beats scissors!";
        result.style.backgroundColor = "red";
        compscore++;
    }else{
        result.innerText = "Draw!😊";
        result.style.backgroundColor = "yellow";
    }

    user_score.innerText = `You : ${userscore}`;
    comp_score.innerText = `Comp : ${compscore}`;
});

