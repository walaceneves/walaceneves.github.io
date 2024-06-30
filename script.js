const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1) Qual é o nome da estrela hipergigante vermelha que é uma das maiores estrelas conhecidas?",
        alternativas: [
            {
                texto: "A) Betelgeuse",
                afirmacao: "1)incorreto"
            },
            {
                texto: "B) Antares",
                afirmacao: "1)correto"
            },
              {
                texto: "C) Rigel",
                afirmacao: "1)incorreto"
            },
            {
                texto: "D) Canopus",
                afirmacao: "1)incorreto"
            }
        ]
    },
    
    {
        enunciado: "2)  Qual é o termo usado para descrever a região do espaço-tempo em torno de um buraco negro, onde a gravidade é tão intensa que nada pode escapar, nem mesmo a luz?",
        alternativas: [
            {
                texto: "A) Horizonte de eventos",
                afirmacao: "2)correto"
            },
            {
                texto: "B) Singularidade",
                afirmacao: "2)incorreto"
            },
              {
                texto: "C) Ergosfera",
                afirmacao: "2)incorreto"
            },
            {
                texto: "D) Espaço-tempo curvo",
                afirmacao: "2)incorreto"
            }
        ]
    },
    {
        enunciado: "3)  Qual é o nome da teoria que propõe que o universo está se expandindo a uma taxa acelerada devido a uma misteriosa “energia escura”?",
        alternativas: [
            {
                texto: "A) Teoria das cordas",
                afirmacao: "3)incorreto"
            },
            {
                texto: "B) Teoria do estado estacionário",
                afirmacao: "3)incorreto"
            },
              {
                texto: "C) Teoria da relatividade geral",
                afirmacao: "3)incorreto"
            },
            {
                texto: "D) Modelo ΛCDM",
                afirmacao: "3)correto"
            }
        ]
    },
    
    {
        enunciado: "4)  Qual é o nome da galáxia em que o Sistema Solar está localizado?",
        alternativas: [
            {
                texto: "A) Via Láctea",
                afirmacao: "4)correto"
            },
            {
                texto: "B) Andrômeda",
                afirmacao: "4)incorreto"
            },
              {
                texto: "C) Centauro A",
                afirmacao: "4)incorreto"
            },
            {
                texto: "D) Sombrero",
                afirmacao: "4)incorreto"
            }
        ]
    },
    
    {
        enunciado: "5)  Quão velho é o universo?",
        alternativas: [
            {
                texto: "A) 13,8 bilhões de anos",
                afirmacao: "5)correto"
            },
            {
                texto: "B) 4,5 bilhões de anos",
                afirmacao: "5)incorreto"
            },
              {
                texto: "C) 10 bilhões de anos",
                afirmacao: "5)incorreto"
            },
            {
                texto: "D) 20 bilhões de anos",
                afirmacao: "5)incorreto"
            }
        ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "RESPOSTAS";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
