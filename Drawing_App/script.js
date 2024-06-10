let brush = document.querySelector(".brush");
let eraser = document.querySelector(".eraser");
let reset = document.querySelector(".reset");
let canvas = document.querySelector(".canvas-drawing");
let inputColor = document.querySelector("input");
let ctx = canvas.getContext("2d");
let x, y, color = "white";
let isPressed = false;

window.addEventListener("load", () => {
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;   
});

inputColor.addEventListener("change", () => {
    color = inputColor.value;
});

brush.addEventListener("click", () => {
    brush.style.border = "1.5px solid black";
    eraser.style.border = "1.5px solid transparent";
    color = inputColor.value;
});

eraser.addEventListener("click", () => {
    brush.style.border = "1.5px solid transparent";
    eraser.style.border = "1.5px solid black";
    color = "white";
});

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
    if(isPressed) {
        a = e.offsetX;
        b = e.offsetY;
        circle(a, b);
        line(x, y, a, b);
        x = a;
        y = b;
    }
});

function circle (x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
};

function line (x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 20;
    ctx.stroke();
};

reset.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})