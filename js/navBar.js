let botaoAbrir = document.querySelector(".botaoMenu");
let menuOculto = document.querySelector(".menuOculto");
let botaoFechar = document.querySelector(".btn-close");

botaoAbrir.addEventListener("click", abrirMenu);
botaoFechar.addEventListener("click", fecharMenu);

function abrirMenu() {
    menuOculto.style.right = "0";
}

function fecharMenu() {
    menuOculto.style.right = "-320px";
}