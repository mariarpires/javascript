//atv1
let imagem = document.getElementById("imagem")
function troca(){
    imagem.src ="choraoo.jpg"
}
console.log("--------------------------")

//atv2
function mudarCorC(){
    texto.style.color = "black"
    document.body.style.backgroundColor = "white"
}
function mudarCorE(){
    texto.style.color = "white"
    document.body.style.backgroundColor = "black"
}

console.log("--------------------------")

//atv3
let botao3 = document.getElementById("botao3");
let texto1 = document.getElementById("texto1");

botao3.addEventListener("click", function () {
    texto1.innerText = "Meu nome é Maria Alice, tenho 16 anos, moro em Suzano, estudo no Sesi e faço o curso de Desenvolvimento de Sistemas.";
});
    
console.log("--------------------------")

//atv4

console.log("--------------------------")

//atv5
let botao4 = document.getElementById("botao4")
let cores = ["green", "yellow", "blue"]
let indice = 0
botao4.addEventListener("click", function () {
    botao4.style.backgroundColor = cores[indice]
    indice = (indice + 1) 
})
console.log("--------------------------")

//atv6

console.log("--------------------------")

//atv7

console.log("--------------------------")

//atv8

console.log("--------------------------")

//atv9

console.log("--------------------------")