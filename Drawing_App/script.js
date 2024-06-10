let brush = document.querySelector(".brush");
let eraser = document.querySelector(".eraser");

brush.addEventListener("click", () => {
    brush.style.border = "1.5px solid black";
    eraser.style.border = "1.5px solid transparent";
})

eraser.addEventListener("click", () => {
    brush.style.border = "1.5px solid transparent";
    eraser.style.border = "1.5px solid black";
})

