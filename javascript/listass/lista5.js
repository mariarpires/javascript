//atv1
let idade = prompt("Você tem quantos anos?")
let carteira = true

if (carteira == true && idade >= 18) {
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir")
}
console.log("----------------------------")

//atv2
let anos = prompt("Há quantos anos você atua na empresa?")
let projetos = prompt("Quantos projetos você realizou?")

if (anos >= 5 || projetos > 10) {
    console.log("Você está elegível para promoção");
} else {
    console.log("Você não está elegível para promoção");
}
console.log("----------------------------")

//atv3
let idd = prompt("Informe sua idade")
if (idd >= 18 && idd <= 30) {
    console.log("Você pode entrar no evento")
} else {
    console.log("Você não pode entrar no evento")
}
console.log("----------------------------")

//atv4
let idadee = prompt("Qual sua idade?")
let experiencia = true

if (idadee > 21 && experiencia) {
    console.log("Você foi aceito para a vaga");
} else {
    console.log("Você não foi aceito para a vaga");
}
console.log("----------------------------")

//atv5
let user = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

if (user == "admin" && senha == "1234") {
    console.log("Login bem-sucedido");
} else {
    console.log("Nome de usuário ou senha incorretos");
}
console.log("----------------------------")

//atv6
let num = prompt("Digite um número")
if (num >= 10 && num <= 20) {
    console.log("O número está dentro do intervalo entre 10 e 20")
} else if (num >= 30 && num <= 50){
    console.log("O número está dentro do intervalo entre 30 e 50")
} else {
    console.log("Ele não está dentro do intervalo de 10 e 20 nem 30 e 50")
}
console.log("----------------------------")

//atv7
let numero = prompt("Digite um número")

if (numero < 10 || numero > 100) {
    console.log("O número é aceito");
} else if (numero == 50) {
    console.log("O número não é aceito");
}