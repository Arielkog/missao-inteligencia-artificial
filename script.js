const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

const perguntas = [
    {
        enunciado: "Assim que você sai da escola, se depara com uma nova tecnologia: um chat capaz de responder todas as dúvidas e gerar imagens hiper-realistas. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador! Tenho medo de perder espaço no futuro.",
                afirmacao: "No início, sentiu receio sobre a velocidade com que a tecnologia poderia substituir habilidades humanas."
            },
            {
                texto: "Isso é maravilhoso! Quero aprender a usar no meu dia a dia.",
                afirmacao: "Desde o primeiro contato, enxergou a IA como uma ferramenta poderosa para ampliar sua criatividade."
            }
        ]
    },
    {
        enunciado: "A professora de tecnologia pede um trabalho sobre o impacto da Inteligência Artificial na sociedade e no meio ambiente. Como você decide fazer a pesquisa?",
        alternativas: [
            {
                texto: "Uso uma ferramenta de IA para buscar fontes, resumir ideias e organizar o roteiro.",
                afirmacao: "Aprendeu a usar prompts inteligentes para filtrar informações relevantes e otimizar o tempo de estudo."
            },
            {
                texto: "Pesquiso em artigos científicos, converso com colegas e escrevo tudo com minhas próprias palavras.",
                afirmacao: "Valorizou a pesquisa tradicional e o pensamento crítico para construir argumentos autênticos."
            }
        ]
    },
    {
        enunciado: "Durante o debate em sala, surge a questão: como a IA pode ajudar a combater as mudanças climáticas no planeta Terra?",
        alternativas: [
            {
                texto: "Defendo o uso de algoritmos para monitorar o desmatamento e otimizar energias limpas.",
                afirmacao: "Passou a defender o uso estratégico da tecnologia na preservação ambiental e sustentabilidade."
            },
            {
                texto: "Alerto sobre o alto consumo de energia dos servidores de IA e peço uso consciente.",
                afirmacao: "Destacou a importância de equilibrar o avanço digital com a redução da pegada de carbono."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049, sua trajetória com a tecnologia ficou assim:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

botaoReiniciar.addEventListener("click", () => {
    atual = 0;
    historiaFinal = "";
    caixaResultado.style.display = "none";
    mostraPergunta();
});

mostraPergunta();
