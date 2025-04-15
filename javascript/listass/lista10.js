//atv1
for(let contador = 1; contador <= 30; contador++) {
    console.log(contador)
}
console.log("-----------------")

//atv2
for(let n = 30; n >= 1; n--){
    console.log(n)
}
console.log("-----------------")
//atv3
let nota = prompt("Quais suas notas?")
for(let nota = 1; nota >= 5; nota++){
if (nota >= 50) {
    console.log("Acima da média")
} else if (nota < 50) {
    console.log("Abaixo da média")
}

console.log("-----------------")
}
//atv4
let tab = prompt("Digite um número de 1 a 10")
console.log("-----------------")

//atv5
let np = prompt("Digite o número de patinhos:");
for (let np = i; np >= 1; np--) {
    console.log(i + " patinhos foram passear Além das montanhas Para brincar A mamãe gritou: Quá, quá, quá, quá Mas só " + (np - 1) + " patinhos voltaram de lá.")
    console.log("A mamãe patinha foi procurar Além das montanhas Na beira do mar A mamãe gritou: Quá, quá, quá, quá E os patinhos voltaram de lá.");
}
console.log("-----------------")

//atv6
for (let idd = 1; idd <= 10; idd++) {
    let idd = prompt("Fale 10 idades:");
    if (numero >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}
console.log("-----------------")

//atv7
for (let voto = 1; voto <= 1; voto++) {
    let voto = prompt("Qual seu voto?:");
    if (voto >= 1, 2, 3, 4) {
        console.log("Voto para os respectivos candidatos");
    } else if (voto >= 5){
        console.log("Voto nulo");
    }else{
        console.log("Voto em branco");
    }   
}