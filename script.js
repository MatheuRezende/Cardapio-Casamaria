
    const cardapio = {
    1: [
        { nome: "Fechado", img: "img/fechado.jpg" },
        { nome: "Isca de carne com mandioca, molho de chuchu, jiló, arroz, feijão e salada repolho.", img: "img/isca.jpg" },
        { nome: "Filé de frango acebolado, purê de batata, beterraba, arroz, feijão e salada.", img: "img/frango-acebolado.jpg" },
        { nome: "Bisteca assada, molho de mandioca, couve, arroz, feijão e salada de alface.", img: "img/bisteca.jpg" },
        { nome: "Frango assado no shoyu, farofa de banana, legumes, arroz, feijão e salada.", img: "img/Frangonoshoyu.png" },
        { nome: "Feijoada, couve, farofa, laranja, banana frita, arroz e salada de repolho", img: "img/Feijoada, couve, farofa, laranja, banana frita, arroz e salada de repolho.jpg" },
        { nome: "Churrasco, feijão tropeiro, maionese falsa, mandioca, arroz, feijão normal e vinagrete", img: "img/Churrasco, feijão tropeiro, maionese falsa, mandioca, arroz, feijão normal e vinagrete.jpg" }
    ],

    2: [
        { nome: "Fechado", img: "img/fechado.jpg" },
        { nome: "Segunda - Carne de panela, purê de abóbora, couve, arroz, feijão e salada de repolho.", img: "img/carne-panela.jpg" },
        { nome: "Filé de frango com batatas, cenoura no azeite, feijão temperado com calabresa, arroz, feijão normal e salada de alface.", img: "img/frango-batata.jpg" },
        { nome: "Almôndegas com espaguete, feijoada vegetariana, feijão normal, arroz e salada de repolho.", img: "img/almondega.jpg" },
        { nome: "Frango ao molho com polenta, milho verde, quiabo, feijão, arroz e salada.", img: "img/frango-polenta.jpg" },
        { nome: "Feijoada, couve, farofa, laranja, banana frita, arroz e salada de repolho", img: "img/Feijoada, couve, farofa, laranja, banana frita, arroz e salada de repolho.jpg" },
        { nome: "Churrasco, feijão tropeiro, maionese falsa, mandioca, arroz, feijão normal e vinagrete", img: "img/Churrasco, feijão tropeiro, maionese falsa, mandioca, arroz, feijão normal e vinagrete.jpg" }
    ],

    3: [
        { nome: "Fechado", img: "img/fechado.jpg" },
        { nome: "Carne moída com legumes, quiabo, polenta, bolinho de arroz, feijão, arroz e salada de repolho.", img: "img/carne-moida.jpg" },
        { nome: "Galinhada, molho de pequi, banana frita, farofa, feijão e salada de alface.", img: "img/galinhada.jpg" },
        { nome: "Bife de carne acebolado, batata frita, legumes, feijão, arroz e salada.", img: "img/bife.jpg" },
        { nome: "Frango assado com batata doce, macarrão alho e óleo, feijão temperado com calabresa, arroz, feijão normal e salada.", img: "img/frango-doce.jpg" },
        { nome: "Feijoada, couve, farofa, laranja, banana frita, arroz e salada de repolho", img: "img/Feijoada, couve, farofa, laranja, banana frita, arroz e salada de repolho.jpg" },
        { nome: "Churrasco, feijão tropeiro, maionese falsa, mandioca, arroz, feijão normal e vinagrete", img: "img/Churrasco, feijão tropeiro, maionese falsa, mandioca, arroz, feijão normal e vinagrete.jpg" }
    ],

    4: [
        { nome: "Fechado", img: "img/fechado.jpg" },
        { nome: "Costelinha assada com ervas, couve, tutu de feijão, arroz, feijão normal e salada repolho.", img: "img/costelinha.jpg" },
        { nome: "Frango assado temperado com maionese, legumes, farofa simples, feijão e salada.", img: "img/frango-maionese.jpg" },
        { nome: "Hambúrguer caseiro, batata frita, legumes, feijão, arroz e salada de repolho.", img: "img/hamburguer.jpg" },
        { nome: "Frango assado com ervas, mandioca e parmesão, puré de abóbora, arroz, feijão e salada.", img: "img/frango-ervas.jpg" },
        { nome: "Feijoada, couve, farofa, laranja, banana frita, arroz e salada de repolho", img: "img/Feijoada, couve, farofa, laranja, banana frita, arroz e salada de repolho.jpg" },
        { nome: "Churrasco, feijão tropeiro, maionese falsa, mandioca, arroz, feijão normal e vinagrete", img: "img/Churrasco, feijão tropeiro, maionese falsa, mandioca, arroz, feijão normal e vinagrete.jpg" }
    ]
};

// DATA ATUAL
const hoje = new Date();
const diaSemana = hoje.getDay(); // 0 a 6
const diaMes = hoje.getDate();

// CALCULA SEMANA (1 a 4)
let semana = Math.ceil(diaMes / 7);
if (semana > 4) semana = 4; // garante até semana 4

// PEGA PRATO
const prato = cardapio[semana][diaSemana];

// MOSTRA NA TELA
const nomeSemana = ["", "Primeira Semana", "Segunda Semana", "Terceira Semana", "Quarta Semana"];

document.getElementById("nome-prato").innerText = nomeSemana[semana];
document.getElementById("img-prato").src = prato.img;
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

// mostra o dia abaixo da semana
document.getElementById("dia-semana").innerText = diasSemana[diaSemana];
document.getElementById("preco-prato").innerText = "R$ 27,00";