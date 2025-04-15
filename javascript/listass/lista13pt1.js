//atv1
console.log("--------------------")
let saudacao = function(nome) {
    console.log("Olá", nome,"! Como vai?")
}
saudacao("Maria Alice")
console.log("-------------------")

//atv2
let soma = (n1, n2) => {
    let resultado = n1 + n2
    return resultado
}
console.log(soma(3,6))
console.log("-------------------")

//atv3
let area = (n3, n4) => {
    let resultado = n3*n4
    return resultado
}
console.log(area(5,12))
console.log("-------------------")

//atv4
let dobro = function (n5) {
    let resultado = n5 * 2
    return resultado
}
console.log(dobro(23))
console.log("-------------------")

//atv5
let quadrado = function (n6) {
    let resultado = n6 * n6
    return resultado
}
console.log(quadrado(9))
console.log("-------------------")

//atv6
//const verificarMaioridade = (idade) => idade >= 18 ? "Maior de idade" //

//atv7
const media = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) / 3;

console.log(media(6, 10, 8));