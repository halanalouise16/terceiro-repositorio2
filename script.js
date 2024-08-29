const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A feijoada teve sua origem na época da escravidão pela escassez de alimento, os escravos comiam as sobras deixadas pelos ricos e desde então, este prato virou parte da culinária brasileira. Qual das seguintes afirmações sobre a feijoada e seu contexto racial e cultural  é verdadeira? ",
        alternativas: [
            "A feijoada é um prato que foi exclusivamente desenvolvido na Europa e não tem conexão com a história do racismo ou a cultura afro-brasileira .",
            " A feijoada, embora originalmente um prato associado a culinária afro-brasileira, pode ser usado como um meio de promover a preservação cultural e discutir questões de racismo no Brasil."
        ]
    },
    {
        enunciado: "De que maneira a promoção da feijoada como um símbolo da diversidade cultural e sua conexão com práticas agroecológicas podem ajudar a combater estereótipos raciais e preconceitos associados à culinária afro-brasileira?",
        alternativas: [
            "Ao enfatizar a feijoada apenas como um prato de origem europeia, a promoção da feijoada não contribui para a desmistificação de estereótipos raciais nem para a preservação agroecológica.",
            "Promover a feijoada como um símbolo da diversidade cultural, destacando sua conexão com práticas agroecológicas e a herança afro-brasileira, pode ajudar a combater estereótipos raciais ao reconhecer e valorizar a contribuição cultural e a importância ambiental dos ingredientes."
        ]
    },
    {
        enunciado: "A feijoada, ao refletir aspectos da culinária afro-brasileira, pode ser interpretada como um símbolo tanto da preservação cultural das comunidades afrodescendentes quanto das desigualdades e do racismo histórico que influenciaram sua origem e consumo?",
        alternativas: [
            "A feijoada preserva tradições culturais afro-brasileiras, mas também reflete desigualdades e racismo histórico, pois ingredientes mais nobres eram consumidos pela elite branca, enquanto os cortes simples eram para as populações afrodescendentes ",
            "A feijoada não tem nenhuma relação com a culinária afro-brasileira ou com a história da desigualdade social no Brasil. ela é simplesmente um prato típico de qualquer cozinha brasileira, sem conexão com aspectos culturais ou históricos específicos das comunidades afrodescendentes. "
        ]
    },
    {
        enunciado: " A feijoada, tradicionalmente associada à culinária afro-brasileira, pode ser interpretada como um reflexo das relações históricas de racismo e desigualdade no Brasil, e qual é o papel da preservação e valorização desse prato na promoção de uma maior equidade e reconhecimento da contribuição afro-brasileira à cultura nacional.",
        alternativas: [
            " A feijoada, embora considerada um prato típico e tradicional do Brasil, tem suas origens na culinária dos escravizados africanos, refletindo as relações de poder e opressão da época.",
            "A história da feijoada pode ilustrar as desigualdades sociais e raciais, destacando a necessidade de uma reavaliação crítica das tradições e da forma como elas são interpretadas e celebradas."
        ]
    },
    {
        enunciado: "A preservação da feijoada como símbolo cultural afro-brasileiro está mais ligada à sua resistência ao racismo ou à sua valorização contemporânea?",
        alternativas: [
            "A preservação da feijoada como símbolo cultural afro-brasileiro está intrinsecamente ligada tanto à sua resistência ao racismo quanto à sua valorização contemporânea. ",
            " A feijoada é preservada principalmente por ser um prato que não tem relação com a cultura afro-brasileira, mas sim com tradições de outras regiões do Brasil."
        ]
    },
    {
        enunciado: "Como a preservação da agroecologia pode ajudar a combater o racismo estrutural na produção de alimentos tradicionais, como a feijoada, no Brasil?",
        alternativas: [
            " Ao promover a sustentabilidade e o respeito às culturas tradicionais, a agroecologia valoriza a contribuição afro-brasileira à culinária, como a feijoada, e combate o racismo ao garantir que essas práticas sejam respeitadas e preservadas.",
            " Ao incentivar a produção em larga escala de alimentos tradicionais, a agroecologia contribui para a uniformização das práticas alimentares, minimizando as diferenças culturais e, consequentemente, combatendo o racismo."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
