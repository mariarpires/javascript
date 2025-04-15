//atv1
let idade = prompt("Qual sua idade?")
console.log("Sua idade é ",idade)

if (idade >= 18) {
    console.log("Você é maior de idade")
} else{
    console.log("Você é menor de idade")
}
console.log("----------------------------")

//atv2
let numero = prompt("Escolha um número:")
let resultado = numero %2 //resto
if (resultado == 0) {
    console.log("O número é par")
} else {
    console.log("O número é ímpar")
}
console.log("----------------------------")

//atv3
let nota = prompt("Qual sua nota?: ")
if(nota >= 7) {

console.log("Aprovado")
} else {
    console.log("Reprovado")
}
console.log("----------------------------")

//atv4
let idades = prompt("Qual sua idade?")
if (idades >= 18) {
    console.log("Entrada permitida")
} else{
    console.log("Entrada proibida")
}
console.log("----------------------------")

//atv5
let senha = prompt("Digite a senha")
if (senha == 1234) {
    console.log("Senha correta")
} else{
    console.log("Senha incorreta")
}
console.log("----------------------------")

//atv6
let temperatura = prompt("Quantos graus está fazendo?")
if (temperatura >= 30) {
    console.log("Está quente")
} else{
    console.log("Está frio")
}
console.log("----------------------------")

//atv7
let num = prompt("Digite um número")
if (num >=0) {
    console.log("Positivo")
} else{
    console.log("Negativo")
}