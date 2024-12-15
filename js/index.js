var value1 = Math.floor(Math.random() * 1000) + 1;
var value2 = Math.floor(Math.random() * 1000) + 1;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#value1').innerHTML = value1;
    document.querySelector('#value2').innerHTML = value2;
})

var buttom = document.querySelector('#buttonResult');

buttom.addEventListener('click', () => {
    var resultUser = parseInt(document.querySelector('#securityVerificationInput').value);
    console.log(resultUser);
    console.log(value1);
    console.log(value2);
    if (resultUser != (value1 + value2)) {
        alert("Wrong answer");
    } else {
        alert("Correct answer");
    }
})


var menuButton = document.querySelector("#menuIcon");

menuButton.addEventListener('click', () => {
    if(document.getElementById("menuCollapse").style.display == "none") {
        document.getElementById("menuCollapse").style.display = "inherit";
        document.getElementById("mainMenu").style.backgroundColor = "#2D2D2D"
        document.getElementById("backgroundHidden").style.display = "inherit";
        document.body.style.touchAction = "none"; // Bloqueia ações de toque
        document.body.style.overflow = "hidden";  // Remove o scroll
    } else {
        document.getElementById("menuCollapse").style.display = "none";
        document.getElementById("mainMenu").style.backgroundColor = "transparent"
        document.getElementById("backgroundHidden").style.display = "none";
        document.body.style.overflow = '';
        document.body.style.touchAction = "";
    }

    var backButton = document.querySelector("#back");

    backButton.addEventListener('click', () => {
        document.getElementById("menuCollapse").style.display = "none";
        document.getElementById("mainMenu").style.backgroundColor = "transparent"
        document.getElementById("backgroundHidden").style.display = "none";
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
    })
})