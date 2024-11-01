let tamanhoBalao = 150; // Tamanho inicial do balão
let estourado = false;

function inflarBalao() {
    if (estourado) return; // Se o balão já estourou, não faz nada

    tamanhoBalao += 20; // Aumenta o tamanho do balão

    let balao = document.getElementById('balao');
    balao.style.width = tamanhoBalao + 'px';
    balao.style.height = tamanhoBalao + 'px';

    // Verifica se o balão deve estourar
    if (tamanhoBalao >= 300) { // Define o tamanho máximo antes de estourar
        balao.src = "https://via.placeholder.com/150/ffffff/ff0000?text=Estourou!"; // Imagem de estouro
        estourado = true;
    }
}
