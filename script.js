// Carregar perguntas iniciais
perguntasRespostas.forEach(item => {
    criaCartao(item.pergunta, item.resposta);
});

// Botão para adicionar novo cartão
document.getElementById('adicionar-cartao').addEventListener('click', () => {
    const pergunta = prompt("Digite a pergunta:");
    const resposta = prompt("Digite a resposta:");
    if (pergunta && resposta) {
        criaCartao(pergunta, resposta);
    }
});
