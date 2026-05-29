let button = document.querySelector(".btn-shop");

function changeButton() {
    button.classList.toggle("active-btn");  /* class ON/OFF karta hai */
}

button.onclick = changeButton;  /* click hone pe function chalega */