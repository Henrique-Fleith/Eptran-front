const jogo = (() => {
    const palavras = [
        { palavra: "pare", dica: "Sinal de parada obrigatória" },
        { palavra: "rotatoria", dica: "Tipo de cruzamento circular" },
        { palavra: "cinto", dica: "Equipamento de segurança" },
        { palavra: "velocidade", dica: "Deve ser controlada ao dirigir" },
        { palavra: "cruzamento", dica: "Interseção de ruas ou estradas" },
        { palavra: "faixa", dica: "Área destinada para pedestres atravessarem" },
        { palavra: "semáforo", dica: "Dispositivo com luzes que controlam o trânsito" },
        { palavra: "pedestre", dica: "Pessoa que anda a pé" },
        { palavra: "bicicleta", dica: "Veículo de duas rodas, movido a pedal" },
        { palavra: "acostamento", dica: "Espaço na lateral da via para emergências" },
        { palavra: "preferencial", dica: "Indica a prioridade de passagem em cruzamentos" },
        { palavra: "multa", dica: "Penalidade financeira por infrações de trânsito" },
        { palavra: "airbag", dica: "Equipamento de segurança que infla em colisões" },
        { palavra: "ultrapassagem", dica: "Ação de passar à frente de outro veículo" },
        { palavra: "retrovisor", dica: "Espelho para ver o trânsito atrás do veículo" },
        { palavra: "motorista", dica: "Pessoa que dirige o veículo" },
        { palavra: "rodovia", dica: "Via de trânsito rápido entre cidades" },
        { palavra: "motoqueiro", dica: "Pessoa que conduz motocicleta" },
        { palavra: "corredor", dica: "Espaço entre filas de veículos" },
        { palavra: "radar", dica: "Equipamento que monitora a velocidade dos veículos" },
        { palavra: "congestionamento", dica: "Acúmulo de veículos que causa lentidão" },
        { palavra: "sinalização", dica: "Conjunto de sinais e placas nas vias" },
        { palavra: "freio", dica: "Mecanismo para reduzir a velocidade do veículo" },
        { palavra: "farol", dica: "Luz dianteira do veículo para iluminar a via" },
        { palavra: "pneu", dica: "Parte do veículo em contato direto com o solo" },
        { palavra: "placa", dica: "Identificação veicular com números e letras" }
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
                document.getElementById("mensagem").innerText = "Parabéns! Você ganhou!";
                document.getElementById("mensagem").style.color = "green";
                bloquearBotoes();
            }
        } else {
            botao.style.backgroundColor = "red";
            botao.disabled = true;

            erros++;
            document.getElementById("erros").innerText = erros;

            if (erros >= 5) {
                document.getElementById("mensagem").innerText = `Você perdeu! A palavra era: ${palavraEscolhida}`;
                document.getElementById("mensagem").style.color = "red";
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

    return {
        iniciarJogo,
        novoJogo,
    };
})();

window.onload = jogo.iniciarJogo;
