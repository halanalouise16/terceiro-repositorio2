const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A feijoada teve sua origem na época da escravidão pela escassez de alimento, os escravos comiam as sobras deixadas pelos ricos e desde então, este prato virou parte da culinária brasileira. Qual das seguintes afirmações sobre a feijoada e seu contexto racial e cultural  é verdadeira?
",
        alternativas: [
            alternativas: [A feijoada é um prato que foi exclusivamente desenvolvido na Europa e não tem conexão com a história do racismo ou a cultura afro-brasileira .

            "",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
        "Alternativa 1",
        "Alternativa 2"
        ]
    }
    enunciado: "Pergunta 3",
        alternativas: [
        "Alternativa 1",
        "Alternativa 2"
        ]
        enunciado: "Pergunta 4",
        alternativas: [
        "Alternativa 1",
        "Alternativa 2"
        ]
        enunciado: "Pergunta 5",
        alternativas: [
        "Alternativa 1",
        "Alternativa 2"
        ]
        enunciado: "Como a preservação da agroecologia pode ajudar a combater o racismo estrutural na produção de alimentos tradicionais, como a feijoada, no Brasil?",
        alternativas: [
        " Ao promover a sustentabilidade e o respeito às culturas tradicionais, a agroecologia valoriza a contribuição afro-brasileira à culinária, como a feijoada, e combate o racismo ao garantir que essas práticas sejam respeitadas e preservadas.",
        "ALTERNATIVA 2
"
        ]  
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}


function mostraAlternativas(){
  for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElemente("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

mostraPergunta