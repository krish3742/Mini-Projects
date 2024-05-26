let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true; // PlayerX, PlayerO

// setTimeout(() => {
//     alert("Click on any boxes to start the game");
// }, 100)

const winPattern = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for(let pattern of winPattern) {
        if(boxes[pattern[0]].innerText === "O" && boxes[pattern[1]].innerText === "O" && boxes[pattern[2]].innerText === "O") {
            setTimeout(() => {
                alert("Player O has won");
            }, 50)
            disableBox();
        } else if (boxes[pattern[0]].innerText === "X" && boxes[pattern[1]].innerText === "X" && boxes[pattern[2]].innerText === "X") {
            setTimeout(() => {
                alert("Player X has won");
            }, 50)
            disableBox();
        }
    }
}

const disableBox = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBox = () => {
    for(let box of boxes) {
        box.disabled = false;
    }
}

const reset = () => {
    enableBox();
    for(let box of boxes) {
        box.innerText = "";
    }
}

resetBtn.addEventListener("click", reset);