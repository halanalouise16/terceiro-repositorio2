const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A feijoada teve sua origem na época da escravidão pela escassez de alimento, os escravos comiam as sobras deixadas pelos ricos e desde então, este prato virou parte da culinária brasileira. Qual das seguintes afirmações sobre a feijoada e seu contexto racial e cultural  é verdadeira? ",
        alternativas: [
            {
                texto: "A feijoada é um prato que foi exclusivamente desenvolvido na Europa e não tem conexão com a história do racismo ou a cultura afro-brasileira .",
                afirmacao: " A feijoada é um prato que foi exclusivamente desenvolvido na Europa e não tem conexão com a história do racismo ou a cultura afro-brasileira .
 ",
            },
            {
                texto: " A feijoada, embora originalmente um prato associado a culinária afro-brasileira, pode ser usado como um meio de promover a preservação cultural e discutir questões de racismo no Brasil.",
                afirmacao: " Podemos afirmar que sim, já que faz  parte da tradição cultural do Brasil e sua história teve origem pela escassez de alimento dos negros na época da escravidão. "
            },
        ]
    },
    {
        enunciado: "De que maneira a promoção da feijoada como um símbolo da diversidade cultural e sua conexão com práticas agroecológicas podem ajudar a combater estereótipos raciais e preconceitos associados à culinária afro-brasileira?",
        alternativas: [
            {
                texto: "Ao enfatizar a feijoada apenas como um prato de origem europeia, a promoção da feijoada não contribui para a desmistificação de estereótipos raciais nem para a preservação agroecológica.",
                afirmacao: "A promoção da feijoada como um prato exclusivamente europeu pode perpetuar estereótipos e reduzir a rica história cultural do prato. A feijoada, em seu formato brasileiro, é um símbolo de como a cultura afro-brasileira contribuiu para a culinária nacional. Ignorar essa dimensão pode reforçar uma visão estreita e imprecisa da história e da cultura brasileira, ao invés de desmistificar preconceitos e valorizar a contribuição africana e indígena. ",
            },
            {
                texto: "Promover a feijoada como um símbolo da diversidade cultural, destacando sua conexão com práticas agroecológicas e a herança afro-brasileira, pode ajudar a combater estereótipos raciais ao reconhecer e valorizar a contribuição cultural e a importância ambiental dos ingredientes.",
                afirmacao: " Enfatizar a herança afro-brasileira da feijoada e o papel dos ingredientes africanos ajuda a combater estereótipos que podem reduzir a cultura afro-brasileira a um papel secundário ou estereotipado. Mostrar a feijoada como um prato que reflete a complexidade e a riqueza das contribuições culturais de diversos grupos ajuda a desmistificar preconceitos e valoriza a diversidade. "
            },
        ]
    },
    {
        enunciado: "A feijoada, ao refletir aspectos da culinária afro-brasileira, pode ser interpretada como um símbolo tanto da preservação cultural das comunidades afrodescendentes quanto das desigualdades e do racismo histórico que influenciaram sua origem e consumo?",
        alternativas: [
            {
                texto: "A feijoada preserva tradições culturais afro-brasileiras, mas também reflete desigualdades e racismo histórico, pois ingredientes mais nobres eram consumidos pela elite branca, enquanto os cortes simples eram para as populações afrodescendentes ",
                afirmacao: "A feijoada é um prato emblemático da culinária brasileira que não apenas preserva tradições culturais afro-brasileiras, mas também revela aspectos de desigualdades e racismo histórico. Originalmente, os ingredientes mais nobres, como carnes de primeira qualidade, eram consumidos pela elite branca, enquanto as partes menos valorizadas do porco, como pés e orelhas, eram destinadas às populações afrodescendentes e trabalhadores escravizados. essa divisão reflete a estrutura social desigual da época e a forma como os recursos alimentares era hierarquizados com base em raça e classe social. Assim, a feijoada é tanto um simbolo de resistência e identidade cultural quanto um lembrete das injustiças historicas enfrentadas pelos afro-brasileiros ",
            },
            {
                texto: "A feijoada não tem nenhuma relação com a culinária afro-brasileira ou com a história da desigualdade social no Brasil. ela é simplesmente um prato típico de qualquer cozinha brasileira, sem conexão com aspectos culturais ou históricos específicos das comunidades afrodescendentes. ",
                afirmacao: " A afirmação de que a feijoada não tem relação com a culinária afro-brasileira ou com a história da desigualdade social no Brasil é incorreta. Na verdade, a feijoada tem profundas raízes na cultura afro-brasileira e reflete a história de desigualdade, pois surgiu como uma adaptação dos escravizados que utilizavam partes menos valorizadas da carne, simbolizando as condições adversas e a marginalização enfrentadas por essas comunidades "
            },
        ]
    },
    {
        enunciado: " A feijoada, tradicionalmente associada à culinária afro-brasileira, pode ser interpretada como um reflexo das relações históricas de racismo e desigualdade no Brasil, e qual é o papel da preservação e valorização desse prato na promoção de uma maior equidade e reconhecimento da contribuição afro-brasileira à cultura nacional.",
        alternativas: [
            {
                texto: " A feijoada, embora considerada um prato típico e tradicional do Brasil, tem suas origens na culinária dos escravizados africanos, refletindo as relações de poder e opressão da época.",
                afirmacao: " Uma consequência da preservação e valorização da feijoada como parte do patrimônio cultural afro-brasileiro é o fortalecimento da identidade cultural e a promoção de maior justiça social "
            },
            {
                texto: "A história da feijoada pode ilustrar as desigualdades sociais e raciais, destacando a necessidade de uma reavaliação crítica das tradições e da forma como elas são interpretadas e celebradas.",
                afirmacao: "A feijoada exemplifica como elementos culturais podem ser apropriados sem reconhecer plenamente as injustiças sociais e raciais que lhes deram origem, destacando a necessidade de uma reflexão crítica sobre nossas tradicões. "
            },
        ]
    },
    {
        enunciado: "A preservação da feijoada como símbolo cultural afro-brasileiro está mais ligada à sua resistência ao racismo ou à sua valorização contemporânea?",
        alternativas: [
            {
                texto: "A preservação da feijoada como símbolo cultural afro-brasileiro está intrinsecamente ligada tanto à sua resistência ao racismo quanto à sua valorização contemporânea. ",
                afirmacao: "Historicamente, a feijoada representou uma forma de resistência e afirmação cultural frente à opressão racial, enquanto hoje é celebrada como um ícone da cultura nacional, refletindo a crescente valorização e reconhecimento das tradições afro-brasileiras.  "
            },
            {
                texto: " A feijoada é preservada principalmente por ser um prato que não tem relação com a cultura afro-brasileira, mas sim com tradições de outras regiões do Brasil.",
                afirmacao: " A preservação da feijoada como símbolo cultural afro-brasileiro está mais ligada à sua capacidade de substituir outros pratos tradicionais da culinária brasileira. "
            },
        ]
    },
    {
        enunciado: "Como a preservação da agroecologia pode ajudar a combater o racismo estrutural na produção de alimentos tradicionais, como a feijoada, no Brasil?",
        alternativas: [
            {
                texto:  " Ao promover a sustentabilidade e o respeito às culturas tradicionais, a agroecologia valoriza a contribuição afro-brasileira à culinária, como a feijoada, e combate o racismo ao garantir que essas práticas sejam respeitadas e preservadas.",
                afirmacao: "Essa alternativa é correta porque a agroecologia promove práticas agrícolas sustentáveis que respeitam e valorizam as culturas tradicionais, incluindo a afro-brasileira. Ao preservar e reconhecer a importância dessas tradições, como a feijoada, ela ajuda a combater o racismo estrutural, que historicamente marginalizou essas práticas. A agroecologia busca integrar saberes tradicionais e promover a diversidade cultural e alimentar."
            },
            {
                texto: " Ao incentivar a produção em larga escala de alimentos tradicionais, a agroecologia contribui para a uniformização das práticas alimentares, minimizando as diferenças culturais e, consequentemente, combatendo o racismo.",
                afirmacao: "Essa alternativa é incorreta porque a produção em larga escala geralmente leva à homogeneização das práticas alimentares, o que pode apagar as diferenças culturais em vez de valorizá-las. A ideia de que minimizar diferenças culturais ajuda a combater o racismo é equivocada, pois desconsidera a importância da diversidade e do respeito às práticas tradicionais, que são justamente o que a agroecologia busca preservar."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    caixaResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado () {
    caixaPerguntas.textContent= " Nos dias atuais ... ";
    caixaResultado.textContent= historiaFinal;
    caixaAlternativas.textContent= "";
}

mostraPergunta();