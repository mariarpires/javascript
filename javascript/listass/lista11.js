// 1
let filmesFavoritos = ["O espetacular homem aranha", "Rapunzel", "Aladdin"];
console.log(filmesFavoritos[0]);
console.log("---------------------");

// 2
let frutas = ["Melancia", "Morango", "Melão", "Laranja", "Uva"];
console.log(frutas[2]);
console.log("---------------------");

// 3
let cores = ["Roxo", "Rosa", "Azul"];
cores.push("Lilás");
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i]);
}
console.log("---------------------");

// 4
let ns = [1, 2, 3, 4];
ns.pop();
for (let i = 0; i < ns.length; i++) {
    console.log(ns[i]);
}
console.log("---------------------");

// 5
let cidades = ["São Paulo", "Salvador"];
cidades.unshift("Porto belo");
for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i]);
}
console.log("---------------------");

// 6
let animais = ["Cavalo", "Cachorro", "Galinha"];
animais.shift();
for (let i = 0; i < animais.length; i++) {
    console.log(animais[i]);
}
console.log("---------------------");

// 7
let carros = ["Sandero", "Civic", "Fusca", "Palio"];
console.log(carros.length);
console.log("---------------------");

let nv = [];
nv.push(8, 2, 4);
nv.unshift(5);
nv.pop();
nv.shift();
console.log(nv);
console.log(nv.length);