let addBtn = document.querySelector("button");
let list = document.querySelector(".container");

addBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let msg = document.querySelector("input");
    let addList = document.createElement("div");
    let para = document.createElement("p");
    let icon = document.createElement("i");
    
    addList.appendChild(para);
    addList.appendChild(icon);

    let newDiv = list.append(addList);
    addList.classList.add("list");
    para.classList.add("message");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-x");
    icon.classList.add("delete");
    para.innerText = msg.value;

    msg.value = "";

    let deleteBtn = document.querySelectorAll(".delete");
    for(let i = 0; i < deleteBtn.length; i++) {
        deleteBtn[i].addEventListener("click", () => {
            deleteBtn[i].parentElement.remove();
        })
    }  
})