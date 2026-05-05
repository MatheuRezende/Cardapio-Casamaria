
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
const diaSemana = hoje.getDay(); // 0 (Domingo) a 6 (Sábado)
const diaMes = hoje.getDate();

// PRIMEIRO DIA DO MÊS
const primeiroDia = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
let primeiroDiaSemana = primeiroDia.getDay();

// Ajusta para considerar segunda como início (0 = segunda, 6 = domingo)
primeiroDiaSemana = (primeiroDiaSemana === 0) ? 6 : primeiroDiaSemana - 1;

// CALCULA O PRIMEIRO DIA COMPLETO (primeira segunda-feira do mês)
const primeiroDiaCompleto = 1 + (7 - primeiroDiaSemana);

// CÁLCULO DA SEMANA (AGORA CORRETO)
let semana;

if (diaMes < primeiroDiaCompleto) {
    semana = 1; // ainda está na "semana quebrada", mantém como 1
} else {
    semana = Math.floor((diaMes - primeiroDiaCompleto) / 7) + 2;
}

// Limita até 4 semanas
if (semana > 4) semana = 4;
