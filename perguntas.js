// Exemplo de perguntas e respostas, pode ser expandido
const perguntasRespostas = [
    { pergunta: "Qual é a capital da França?", resposta: "Paris" },
    { pergunta: "Quem criou a teoria da relatividade?", resposta: "Albert Einstein" },
    { pergunta: "Qual é a cor do céu em um dia ensolarado?", resposta: "Azul" }
];

function criaCartao(pergunta, resposta) {
    const container = document.getElementById('cartoes-container');

    const cartao = document.createElement('div');
    cartao.className = 'cartao';

    const perguntaElem = document.createElement('div');
    perguntaElem.className = 'pergunta';
    perguntaElem.textContent = pergunta;

    const respostaElem = document.createElement('div');
    respostaElem.className = 'resposta';
    respostaElem.textContent = resposta;

    // Ao clicar, mostra/esconde a resposta
    cartao.addEventListener('click', () => {
        if (respostaElem.style.display === 'none') {
            respostaElem.style.display = 'block';
        } else {
            respostaElem.style.display = 'none';
        }
    });

    cartao.appendChild(perguntaElem);
    cartao.appendChild(respostaElem);

    container.appendChild(cartao);
}
