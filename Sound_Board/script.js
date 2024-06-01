let buttons = document.querySelectorAll("button");
let reset = document.querySelector(".reset");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.previousElementSibling.play();
        buttons.forEach((check) => {
            if(check.id !== button.id) {
                check.previousElementSibling.pause();
                check.previousElementSibling.currentTime = 0;
            }
        })
    })
})

reset.addEventListener("click", () => {
    buttons.forEach((button) => {
        button.previousElementSibling.pause();
        button.previousElementSibling.currentTime = 0;
    })
})