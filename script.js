function fraseMotivacionalAleatoria() {
    const frases = [
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Acredite, você é mais forte do que imagina.",
        "Cada dificuldade é uma oportunidade disfarçada.",
        "Você nunca sabe a força que tem, até que sua única opção é ser forte.",
        "Seja a mudança que você deseja ver no mundo.",
        "A persistência é o caminho do êxito.",
        "Grandes coisas nunca vêm de zonas de conforto.",
        "Acredite nos seus sonhos e eles se tornarão realidade.",
        "Não importa o quão devagar você vá, desde que não pare.",
        "A jornada de mil milhas começa com o primeiro passo."
    ];

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * frases.length);

    // Retorna a frase aleatória
    return frases[indiceAleatorio];
}

// Exemplo de uso
console.log(fraseMotivacionalAleatoria());