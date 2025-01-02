// Crio duas variáveis inteiras com valores aleatorios de 1 a 1000 
var value1 = Math.floor(Math.random() * 1000) + 1;
var value2 = Math.floor(Math.random() * 1000) + 1;

// adiciona um evento ao documento ao recarregar a página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#value1').innerHTML = value1;
    document.querySelector('#value2').innerHTML = value2;
})

var buttom = document.querySelector('#buttonResult');

// adiciona um evento ao clicar no botão
buttom.addEventListener('click', () => {

    // captura o valor do input de resposta e passa pra inteiro
    var resultUser = parseInt(document.querySelector('#securityVerificationInput').value);

    // captura o elemento resposta
    var campoResposta = document.querySelector("#result");
    
    // Realiza a verificação de resposta do usuario
    // Se o valor for diferente informará reposta errada
    // se for igual informará resposta certa
    if (resultUser != (value1 + value2)) {
        campoResposta.style = 'color: red';
        campoResposta.innerHTML = "Resposta Errada!";
    } else {
        campoResposta.style = 'color: green';
        campoResposta.innerHTML = "Resposta Correta!";
    }
})

// captura o elemento do botão de menu
var menuButton = document.querySelector("#menuIcon");

// adiciona um evento ao botão menu
menuButton.addEventListener('click', () => {
    // Se clicado e o display do menu estiver desligado exibira o menu
    if(document.getElementById("menuCollapse").style.display == "none") {
        document.getElementById("menuCollapse").style.display = "inherit";
        document.getElementById("mainMenu").style.backgroundColor = "#2D2D2D"
        document.getElementById("backgroundHidden").style.display = "inherit";
        document.body.style.touchAction = "none"; // Bloqueia ações de toque caso acesso realizado pelo celular
        document.body.style.overflow = "hidden";  // Remove o scroll caso acesso desktop
    } else {
        // se não estiver desligado irá esconder o menu permitindo as rolagens
        document.getElementById("menuCollapse").style.display = "none";
        document.getElementById("mainMenu").style.backgroundColor = "transparent"
        document.getElementById("backgroundHidden").style.display = "none";
        document.body.style.overflow = '';
        document.body.style.touchAction = "";
    }

    // Captura o botão dentro do menu
    var backButton = document.querySelector("#back");

    // adiciona um evento para fechar o menu também
    backButton.addEventListener('click', () => {
        document.getElementById("menuCollapse").style.display = "none";
        document.getElementById("mainMenu").style.backgroundColor = "transparent"
        document.getElementById("backgroundHidden").style.display = "none";
        document.body.style.overflow = '';
        document.body.style.touchAction = '';
    })
})