// Lista de palavras e dicas sobre trânsito
const palavras = [
    { palavra: "macacaco", dica: "Raça do Vitor" },
 
];

let palavraEscolhida, dicaEscolhida, palavraAtual, erros, letrasUsadas;

function iniciarJogo() {
    const sorteio = palavras[Math.floor(Math.random() * palavras.length)];
    palavraEscolhida = sorteio.palavra.toUpperCase();
    dicaEscolhida = sorteio.dica;
    palavraAtual = "_".repeat(palavraEscolhida.length);
    erros = 0;
    letrasUsadas = new Set();

    document.getElementById("dica").innerText = "Dica: " + dicaEscolhida;
    document.getElementById("palavra").innerText = palavraAtual;
    document.getElementById("erros").innerText = erros;
    document.getElementById("mensagem").innerText = "";
    criarBotoes();
}


function criarBotoes() {
    const botoesDiv = document.getElementById("botoes-letras");
    botoesDiv.innerHTML = "";
    for (let i = 65; i <= 90; i++) {  
        const letra = String.fromCharCode(i);
        const botao = document.createElement("button");
        botao.innerText = letra;
        botao.onclick = () => escolherLetra(botao, letra);
        botoesDiv.appendChild(botao);
    }
}

function escolherLetra(botao, letra) {
    if (letrasUsadas.has(letra) || erros >= 5) return;
    letrasUsadas.add(letra);

    if (palavraEscolhida.includes(letra)) {

        botao.style.backgroundColor = "green";
        botao.disabled = true;

        let novaPalavra = "";
        for (let i = 0; i < palavraEscolhida.length; i++) {
            novaPalavra += (palavraEscolhida[i] === letra) ? letra : palavraAtual[i];
        }
        palavraAtual = novaPalavra;
        document.getElementById("palavra").innerText = palavraAtual;

   
        if (palavraAtual === palavraEscolhida) {
            mensagem_ganho = document.getElementById("mensagem");
            mensagem_ganho.innerText = "Parabéns! Você ganhou!"
            mensagem_ganho.style.color = "green"
            
            bloquearBotoes();
        }
    } else {
   
        botao.style.backgroundColor = "red";
        botao.disabled = true;

        erros++;
        document.getElementById("erros").innerText = erros;

     
        if (erros >= 5) {
            mensagem_perca = document.getElementById("mensagem");
            mensagem_perca.innerText = `Você perdeu! A palavra era: ${palavraEscolhida}`;
            mensagem_perca.style.color = "red"
            bloquearBotoes();
        }
    }
}

function bloquearBotoes() {
    const botoes = document.querySelectorAll("#botoes-letras button");
    botoes.forEach(botao => botao.disabled = true);
}


function novoJogo() {
    iniciarJogo();
}


window.onload = iniciarJogo;
