let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let winMsg = document.querySelector("#result");
let resize = document.querySelector(".msg");
let userMsg = document.querySelector("#userPoint");
let comMsg = document.querySelector("#computerPoint");
let resetBtn = document.querySelector("#reset");
let userChoice, winnerName;
let userScore = 0;
let comScore = 0;

rock.addEventListener("mouseover", () => {
    rock.style.border = "3px solid black";
    rock.style.cursor = "pointer";
})

paper.addEventListener("mouseover", () => {
    paper.style.border = "3px solid black";
    paper.style.cursor = "pointer";
})

scissor.addEventListener("mouseover", () => {
    scissor.style.border = "3px solid black";
    scissor.style.cursor = "pointer";
})

rock.addEventListener("mouseout", () => {
    rock.style.border = "none";
})

paper.addEventListener("mouseout", () => {
    paper.style.border = "none";
})

scissor.addEventListener("mouseout", () => {
    scissor.style.border = "none";
})

// 1 - rock, 2 - paper, 3 - scissor 

rock.addEventListener("click", () => {
    userChoice = 1;
    checkWinner();
})

paper.addEventListener("click", () => {
    userChoice = 2;
    checkWinner();
})

scissor.addEventListener("click", () => {
    userChoice = 3;
    checkWinner();
})

let checkWinner = () => {
    let comChoice = Math.floor((Math.random() * 3) + 1);
    if(userChoice === comChoice) {
        winMsg.innerText = "Game Draw";
        resize.style.width = "35vh";
    } else {
        if (userChoice === 1 && comChoice === 2) {
            winMsg.innerText = "You lost! Paper beats rock";
            resize.style.width = "60vh";
            winnerName = "com";
            score(winnerName);
        } else if (userChoice === 1 && comChoice === 3) {
            winMsg.innerText = "You won! Rock beats scissor";
            resize.style.width = "60vh";
            winnerName = "user";
            score(winnerName);
        } else if (userChoice === 2 && comChoice === 1) {
            winMsg.innerText = "You won! Paper beats rock";
            resize.style.width = "60vh";
            winnerName = "user";
            score(winnerName);
        } else if (userChoice === 2 && comChoice === 3) {
            winMsg.innerText = "You lost! Scissor beats paper";
            resize.style.width = "60vh";
            winnerName = "com";
            score(winnerName);
        } else if (userChoice === 3 && comChoice === 1) {
            winMsg.innerText = "You lost! Rock beats scissor";
            resize.style.width = "60vh";
            winnerName = "com";
            score(winnerName);
        } else if (userChoice === 3 && comChoice === 2) {
            winMsg.innerText = "You won! Scissor beats paper";
            resize.style.width = "60vh";
            winnerName = "user";
            score(winnerName);
        } 
    }
}

let score = (name) => {
    if (name === "user") {
        userScore++;
        userMsg.innerText = userScore;
    } else if(name === "com") {
        comScore++;
        comMsg.innerText = comScore;
    }
}

resetBtn.addEventListener("click", () => {
    userScore = 0;
    comScore = 0;
    userMsg.innerText = userScore;
    comMsg.innerText = comScore;
    winMsg.innerText = "Pick your move";
    resize.style.width = "35vh";
})

resetBtn.addEventListener("mouseover", () => {
    resetBtn.style.cursor = "pointer";
})

winMsg.addEventListener("mouseover", () => {
    winMsg.style.cursor = "not-allowed";
})