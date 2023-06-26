let btn = document.getElementById("button"),
    input = document.querySelectorAll("input[type=radio]"),
    thanksPage = document.querySelector(".thanks"),
    ratePage = document.querySelector(".rate"),
    selected = document.querySelector(".selected");

btn.onclick = function() {
    for (let i = 0; i < input.length; i++) {
        if (input[i].checked === true) {
            thanksPage.style.display = "flex";
            ratePage.style.display = "none";
        }
        selected.innerHTML = `You selected ${input[i].nextElementSibling.innerText} out of 5`;
    }
};

