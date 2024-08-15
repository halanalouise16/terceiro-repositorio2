const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const caixaResultado = document.querySelector(".caixa-resultado");

const perguntas = [
    enunciado: "perguntas 1",
    alternativas: [
        "alternativa 1",
        "alternativa 2"
    ]
    {,
    }
    enunciado: "perguntas 2",
    alternativas: [
        "alternativa 1",
        "alternativa 2"
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;

}


