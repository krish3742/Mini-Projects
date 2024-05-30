let expands = document.querySelectorAll(".panel");

expands.forEach((valActive) => {
    valActive.addEventListener("click", () => {
        valActive.classList.add("active");
        expands.forEach((val) => {
            if(val.id !== valActive.id) {
                val.classList.remove("active");
            }
        })
    })
})