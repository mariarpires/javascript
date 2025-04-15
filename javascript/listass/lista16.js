function arredondarNumero() {
    let numero = parseFloat(document.getElementById("numero").value);
    document.getElementById("resultadoArredondamento").innerText = `Arredondado: ${Math.round(numero)}, Teto: ${Math.ceil(numero)}, Piso: ${Math.floor(numero)}`;
}

function converterTexto() {
    let nome = document.getElementById("nome").value;
    document.getElementById("resultadoTexto").innerText = `Maiúsculas: ${nome.toUpperCase()}, Minúsculas: ${nome.toLowerCase()}`;
}

function gerarAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 101);
    document.getElementById("resultadoAleatorio").innerText = `Número Aleatório: ${numeroAleatorio}`;
}

function formatarDecimal() {
    let numero = parseFloat(document.getElementById("numeroDecimal").value);
    document.getElementById("resultadoDecimal").innerText = `Número formatado: ${numero.toFixed(2)}`;
}

function substituirPalavra() {
    let frase = document.getElementById("frase").value;
    let palavraAntiga = document.getElementById("palavraAntiga").value;
    let palavraNova = document.getElementById("palavraNova").value;
    document.getElementById("resultadoSubstituicao").innerText = `Nova frase: ${frase.replace(palavraAntiga, palavraNova)}`;
}

function verificarNumero() {
    let valor = document.getElementById("valor").value;
    let resultado = isNaN(valor) ? "Não é um número" : "É um número";
    document.getElementById("resultadoVerificacao").innerText = resultado;
}

function encontrarLetra() {
    let palavra = document.getElementById("palavra").value;
    let posicao = parseInt(document.getElementById("posicao").value);
    let letra = palavra.charAt(posicao - 1) || "Posição inválida";
    document.getElementById("resultadoLetra").innerText = `Letra na posição ${posicao}: ${letra}`;
}

function nomeCompleto() {
    let nome = document.getElementById("nomePessoa").value;
    let sobrenome = document.getElementById("sobrenome").value;
    document.getElementById("resultadoNomeCompleto").innerText = `Nome completo: ${nome} ${sobrenome}`;
}

function somarNumeros() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("resultadoSoma").innerText = `Soma: ${num1 + num2}`;
}

function verificarIdade() {
    let idade = parseInt(document.getElementById("idade").value);
    let mensagem = idade >= 18 ? "Você pode dirigir" : "Você não pode dirigir";
    document.getElementById("resultadoIdade").innerText = mensagem;
}
