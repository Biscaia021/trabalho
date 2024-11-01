const textos = ["1", "2", "3", "4", "1", "2", "3", "4", "5"]; // Pares + 1
let valoresEmbaralhados = shuffleArray(textos); // Embaralha os textos
let botoes = document.querySelectorAll('.memory-btn');
let primeiraEscolha = null;
let segundaEscolha = null;
let bloqueado = false;

// Função para embaralhar o array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function revelarTexto(indice) {
    if (bloqueado) return; // Impede clique quando verificando pares
    let botao = botoes[indice];
    if (botao.innerText !== "") return; // Já foi revelado

    botao.innerText = valoresEmbaralhados[indice]; // Mostra o texto

    if (primeiraEscolha === null) {
        primeiraEscolha = indice; // Armazena a primeira escolha
    } else {
        segundaEscolha = indice; // Armazena a segunda escolha
        bloqueado = true;
        setTimeout(verificarPar, 1000); // Verifica o par após 1s
    }
}

function verificarPar() {
    if (valoresEmbaralhados[primeiraEscolha] === valoresEmbaralhados[segundaEscolha]) {
        // Se forem iguais, manter o texto revelado
        botoes[primeiraEscolha].style.backgroundColor = 'lightgreen';
        botoes[segundaEscolha].style.backgroundColor = 'lightgreen';
    } else {
        // Se não forem iguais, esconder o texto
        botoes[primeiraEscolha].innerText = "";
        botoes[segundaEscolha].innerText = "";
    }
    primeiraEscolha = null;
    segundaEscolha = null;
    bloqueado = false;
}
