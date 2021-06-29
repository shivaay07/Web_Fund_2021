// -----------navbar-button------------- 

function changeText(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    }
}

// --------- upper left button----------

// var click = 0;
// function clickCount(element) {
//     click++;
//     element.innerHTML = click+ " likes";
// }

// ------- add-desription button--------

function hide(element) {
    element.remove();
}

function myFunction(element) {
    var btn = document.querySelector(".rt-btn");
    btn.remove();
    alert('Ninja was liked');
}