let sign_in = document.querySelector("#sign-in-btn");
let sign_up = document.querySelector("#sign-up-btn");
let sign_in_container = document.querySelector("#sign-in-container");
let sign_up_container = document.querySelector("#sign-up-container");
let sign_in_msg = document.querySelector("#sign-in-msg");
let sign_up_msg = document.querySelector("#sign-up-msg");

sign_in.addEventListener("click", () => {
    let a = sign_in_container.classList.replace("slidecontainer-right", "slidecontainer-left");
    let b = sign_up_msg.classList.replace("slidemsg-left", "slidemsg-right");
    let c = sign_up_container.classList.replace("slidecontainer-right", "slidecontainer-left");
    let d = sign_in_msg.classList.replace("slidemsg-left", "slidemsg-right");
    setTimeout(() => {
        sign_up_container.classList.remove("index");
        sign_in_msg.classList.remove("index");
        sign_in_container.classList.add("index");
        sign_up_msg.classList.add("index");
    }, 500);
})

sign_up.addEventListener("click", () => {
    let a = sign_in_container.classList.value;
    if(a.includes("slidecontainer-left")) {
        sign_in_container.classList.remove("slidecontainer-left");
        sign_up_msg.classList.remove("slidemsg-right");
        sign_up_container.classList.remove("slidecontainer-left");
        sign_in_msg.classList.remove("slidemsg-right");
    }
    sign_in_container.classList.add("slidecontainer-right");
    sign_up_msg.classList.add("slidemsg-left");
    sign_up_container.classList.add("slidecontainer-right");
    sign_in_msg.classList.add("slidemsg-left");
    setTimeout(() => {
        sign_in_container.classList.remove("index");
        sign_up_msg.classList.remove("index");
        sign_up_container.classList.add("index");
        sign_in_msg.classList.add("index");
    }, 500);
})