const host = "https://api.frankfurter.app/latest?";

let dropdowns = document.querySelectorAll(".dropdown select");
let button = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
let msg = document.querySelector("#msg");

let rates = "rates";

for(let select of dropdowns) {
    for(let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let oldImg = element.parentElement.querySelector("img");
    oldImg.src = newSrc;
}

button.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector("input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = 1;
    }
    const URL = `${host}amount=${amtVal}&from=${fromCurr.value}&to=${toCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data.rates[toCurr.value];
    msg.innerText = `${amtVal} ${fromCurr.value} = ${rate} ${toCurr.value}`;
})