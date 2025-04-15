let botao1 = document.getElementById("botao1")
let cores = ["red", "green", "blue", "yellow"]
let indice = 0

botao1.addEventListener("click", function () {
    botao1.style.backgroundColor = cores[indice]
    indice = (indice + 1) 
})

let contador = 0
let botao2 = document.getElementById("botao2")
let likes = document.getElementById("likes")

botao2.addEventListener("click", function () {
    contador++
    likes.innerText = "Curtidas: " + contador
})


let botao3 = document.getElementById("botao3");


let texto1 = document.getElementById("texto1");
let texto2 = document.getElementById("texto2");
let texto3 = document.getElementById("texto3");

botao3.addEventListener("click", function () {
    texto1.innerText = "Eu gosto de JavaScript";
    texto2.innerText = "Eu gosto de JavaScript";
    texto3.innerText = "Eu gosto de JavaScript";
    texto4.innerText = "Eu gosto de JavaScript";
    texto5.innerText = "Eu gosto de JavaScript";
});


let mensagem = document.getElementById("mensagem")
let botao4 = document.getElementById("botao4")

botao4.addEventListener("click", function () {
    mensagem.style.display = "none"  
    botao4.innerText = "Mensagem enviada"  

})

let botao5 = document.getElementById("botao5")
let div5 = document.getElementById("div5")
botao5.addEventListener("click", function () {
    div5.style.display = "flex"  
})

let forma = document.getElementById("forma")
let botaoCirculo = document.getElementById("botaoCirculo")
let botaoQuadrado = document.getElementById("botaoQuadrado")

botaoCirculo.addEventListener("click", function () {
    forma.style.borderRadius = "50%"  
})

botaoQuadrado.addEventListener("click", function () {
    forma.style.borderRadius = "0"  
})