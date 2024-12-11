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
