//atv1
let botao1 = document.getElementById("botao1");

botao1.addEventListener("click", function () {
    
    if (botao1.style.backgroundColor === "#dddd") {
        botao1.style.backgroundColor = "pink";
    } else {
        botao1.style.backgroundColor = "purple"; 
    }
});

//atv2
let likes = 0;
function aumentarLikes() {
    likes++;
    document.getElementById("contador").textContent = "Likes: " + likes;
}

//atv3
function mudarTexto() {
    const textos = document.querySelectorAll
    
    textos.forEach(textContent = "Eu gosto de JavaScript");
}

//atv4
function enviarMensagem() {
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("btnEnviar").textContent = "Mensagem enviada";
}
//atv5
function ajustarDisplay() {
    const div = document.getElementById("divAjuste");
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
}

//atv6
document.getElementById("formDiv").style.width = "200px";
document.getElementById("formDiv").style.height = "200px";
document.getElementById("formDiv").style.backgroundColor = "#5093e6";

function mudarForma(tipo) {
    const div = document.getElementById("formDiv");
    if (tipo === 'circulo') {
        div.style.borderRadius = "50%";
    } else {
        div.style.borderRadius = "0%";
    }
}