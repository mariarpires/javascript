//atv1
let idade = prompt("Qual sua idade?")
if (idade <=12) {
    console.log("Criança")
} else if (idade <=17) {
    console.log("Adolescente")
} else if (idade <=59) {
    console.log("Adulto")
} else if (idade >= 60) {
    console.log("Idoso")
}
console.log("-----------------")

//atv2
let temp = prompt("Qual a temperatura?")
if (temp < 10) {
    console.log("Muito frio")
} else if (temp < 20) {
    console.log("Frio")
} else if (temp < 30) {
    console.log("Agradável")
} else {
    console.log("Muito quente")
}
console.log("-----------------")

//atv3
let turno = prompt("Qual seu turno da escola? (sigla)")
if (turno == "M") {
    console.log("Bom dia!")
} else if (turno == "V") {
    console.log("Boa tarde!")
} else if (turno == "N") {
    console.log("Boa noite!")
} else {
    console.log("Turno inválido")
}
console.log("-----------------")

//atv4
let compra = prompt("Qual o valor da sua compra?")
if (compra <= 100) {
    console.log("Desconto de 5%")
} else if (compra <= 200) {
    console.log("Desconto de 10%")
} else {
    console.log("Desconto de 15%")
}
console.log("-----------------")

//atv5
let nota = prompt("Qual sua nota?")
if (nota > 90) {
    console.log("A")
} else if (nota > 80) {
    console.log("B")
} else if (nota > 70) {
    console.log("C")
} else if (nota > 60) {
    console.log("D")
} else {
    console.log("F")
}
console.log("-----------------")

//atv6
let dia = prompt("Qual dia da semana?")
if (dia === 1) {
    console.log("Domingo")
} else if (dia == 2) {
    console.log("Segunda-feira")
} else if (dia == 3) {
    console.log("Terça-feira")
} else if (dia == 4) {
    console.log("Quarta-feira")
} else if (dia == 5) {
    console.log("Quinta-feira")
} else if (dia == 6) {
    console.log("Sexta-feira")
} else if (dia == 7) {
    console.log("Sábado")
} else {
    console.log("Dia inválido")
}
console.log("-----------------")

//atv7
let distancia = prompt("Qual a distância da pista de corrida?")

if (distancia < 400) {
    console.log("Pista curta")
} else if (distancia < 800) {
    console.log("Pista média")
} else if (distancia < 1500) {
    console.log("Pista longa")
} else {
    console.log("Pista muito longa")
}
console.log("-----------------")

//atv8
let pontuacao = prompt("Qual sua pontuação do jogo?")
if (pontuacao < 1000) {
    console.log("Iniciante")
} else if (pontuacao < 5000) {
    console.log("Intermediário")
} else if (pontuacao < 10000) {
    console.log("Avançado")
} else {
    console.log("Mestre")
}
console.log("-----------------")