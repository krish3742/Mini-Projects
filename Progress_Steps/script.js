let prev = document.querySelector("#previous");
let next = document.querySelector("#next");
let steps = document.querySelectorAll(".steps");

let active = 1;
let maxActive = 4;

next.addEventListener("click", () => {
    update("next");
    buttonActive();
})

prev.addEventListener("click", () => {
    update("prev");
    buttonActive();
})

let update = (button) => {
    if(active > maxActive) {
        active = maxActive;
    } else if (active < 1) {
        active = 1;
    }

    if(button === "prev") {
        steps.forEach((step) => {
            if(step.id == active) {
                step.classList.remove("selected");
            }
        })
        active--;
    } else if(button === "next") {
        active++;
        steps.forEach((step) => {
            if(step.id == active) {
                step.classList.add("selected");
            }
        })
    }
}

let buttonActive = () => {
    if(active == 1) {
        prev.disabled = true;
    } else if(active == 4) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}