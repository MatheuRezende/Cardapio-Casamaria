
    const cardapio = {
    1: [
        { nome: "Fechado", img: "img/fechado.jpeg" },
        { nome: "Isca de carne com mandioca, molho de chuchu, jiló, arroz, feijão e salada repolho.", img: "" },
        { nome: "Filé de frango acebolado, purê de batata, beterraba, arroz, feijão e salada.", img: "img/filadefrango.jpeg" },
        { nome: "Bisteca assada, molho de mandioca, couve, arroz, feijão e salada de alface.", img: "img/bisteca.jpeg" },
        { nome: "Frango assado no shoyu, farofa de banana, legumes, arroz, feijão e salada.", img: "img/Frangoassado.jpeg" },
        { nome: "Feijoada, couve, farofa, laranja, banana frita, arroz e salada de repolho", img: "img/fejoada.jpeg" },
        { nome: "Churrasco, Arroz, feijão tropeiro ou normal, maionese falsa, mandioca e vinagrete", img: "img/churrasco.jpeg" }
    ],

    2: [
        { nome: "Fechado", img: "img/fechado.jpeg" },
        { nome: "Segunda - Carne de panela, purê de abóbora, couve, arroz, feijão e salada de repolho.", img: "img/carnedepanela.jpeg" },
        { nome: "Filé de frango com batatas, cenoura no azeite, feijão temperado com calabresa, arroz, feijão normal e salada de alface.", img: "img/frangocombatata.jpeg" },
        { nome: "Almôndegas com espaguete, feijoada vegetariana, feijão normal, arroz e salada de repolho.", img: "img/macarraocomalmodegas.jpeg" },
        { nome: "Frango ao molho com polenta, milho verde, quiabo, feijão, arroz e salada.", img: "img/Frangonapolenta.jpeg" },
        { nome: "Feijoada, couve, farofa, laranja, banana frita, arroz e salada de repolho", img: "img/fejoada.jpeg" },
        { nome: "Churrasco, Arroz, feijão tropeiro ou normal, maionese falsa, mandioca e vinagrete", img: "img/churrasco.jpeg" }
    ],

    3: [
        { nome: "Fechado", img: "img/fechado.jpeg" },
        { nome: "Carne moída com legumes, quiabo, polenta, bolinho de arroz, feijão, arroz e salada de repolho.", img: "." },
        { nome: "Galinhada, molho de pequi, banana frita, farofa, feijão e salada de alface.", img: "" },
        { nome: "Bife de carne acebolado, batata frita, legumes, feijão, arroz e salada.", img: "" },
        { nome: "Frango assado com batata doce, macarrão alho e óleo, feijão temperado com calabresa, arroz, feijão normal e salada.", img: "" },
        { nome: "Feijoada, couve, farofa, laranja, banana frita, arroz e salada de repolho", img: "img/fejoada.jpeg" },
        { nome: "Churrasco, Arroz, feijão tropeiro ou normal, maionese falsa, mandioca e vinagrete", img: "img/churrasco.jpeg" }
    ],

    4: [
        { nome: "Fechado", img: "img/fechado.jpeg" },
        { nome: "Costelinha assada com ervas, couve, tutu de feijão, arroz, feijão normal e salada repolho.", img: "" },
        { nome: "Frango assado temperado com maionese, legumes, farofa simples, feijão e salada.", img: "" },
        { nome: "Hambúrguer caseiro, batata frita, legumes, feijão, arroz e salada de repolho.", img: "" },
        { nome: "Frango assado com ervas, mandioca e parmesão, purê de abóbora, arroz, feijão e salada.", img: "" },
        { nome: "Feijoada, couve, farofa, laranja, banana frita, arroz e salada de repolho", img: "img/fejoada.jpeg" },
        { nome: "Churrasco, Arroz, feijão tropeiro ou normal, maionese falsa, mandioca e vinagrete", img: "img/churrasco.jpeg" }
    ]
};

// DATA ATUAL
const hoje = new Date();
const diaSemana = hoje.getDay(); // 0 a 6
const diaMes = hoje.getDate();

// PRIMEIRO DIA DO MÊS
const primeiroDia = new Date(hoje.getFullYear(), hoje.getMonth(), 1).getDay();

// CÁLCULO CORRETO DA SEMANA
let semana = Math.ceil((diaMes + primeiroDia) / 7);

if (semana > 4) semana = 4;

// PEGA PRATO
const prato = cardapio[semana][diaSemana];

// MOSTRA NA TELA
const nomeSemana = ["", "Primeira Semana", "Segunda Semana", "Terceira Semana", "Quarta Semana"];

document.getElementById("nome-prato").innerText = nomeSemana[semana];
document.getElementById("img-prato").src = prato.img || "img/padrao.jpg";
document.getElementById("desc-prato").innerText = prato.nome;

const diasSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

document.getElementById("dia-semana").innerText = diasSemana[diaSemana];
document.getElementById("preco-prato").innerText = "R$ 27,00";

