
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let result = document.querySelector("#result");

// function to get the rand value in the expected range
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*
    0 => rock
    1 => paper
    2 => scissors
*/


rock.addEventListener("mouseover", ()=>{
    rock.classList.add("choice2");
    let compchoice = getRandomInt(3);
    if(compchoice == 1){

        result.innerText = `You lose! ${compchoice}`;
        result.style.backgroundColor = "red";
        console.log("Lose")
    }else if(compchoice == 2){

        result.innerText = `You Win ${compchoice}`;
        result.style.backgroundColor = "green";
    }else{
        result.innerText = `Draw  ${compchoice}`;
        result.style.backgroundColor = "yellow";
    }
});

paper.addEventListener("mouseover", ()=>{

    paper.classList.add("choice2");
});

scissors.addEventListener("mouseover", ()=>{

    scissors.classList.add("choice2");
});

