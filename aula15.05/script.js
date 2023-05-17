const div_colorida = document.getElementById("colorida");
const input_cor = document.getElementById("input_cor");
const div_imagens = document.getElementById("imagens");
const meu_array = [1,2,3,4,"casa"];
let minhas_imagens = [
    {
        nome: "Numero 1",
        valor: 1,
        descricao: "Numero 1 com fundo amarelo."
    },
    {
        nome: "Numero 2",
        valor: 2,
        descricao: "Numero 1 com fundo vermelho."
    },
    {
        nome: "Numero 3",
        valor: 3,
        descricao: "Numero 3 vermelho em 3D."
    }
]


div_colorida.style.height = "1em";
div_colorida.style.backgroundColor = "black";

function mudar_cor(e){
    div_colorida.style.backgroundColor = e.target.value;
    console.log(e.target.value);
}

input_cor.onchange = mudar_cor;

/*imprimir array*/

let contador = 0;
while(contador < meu_array.length){
    console.log(meu_array[contador]);
    contador++;
}

for (let i = 0; i < meu_array.length; i++){
    console.log("com for", meu_array[i]);
}

meu_array.forEach( (ele, indice) => {
    console.log(ele, indice);
}
);

for (const ele of meu_array){
    console.log('for of', ele);
}

console.log('map', meu_array.map((e) => e + 1 ));
/*
//alterando o array
minhas_imagens = minhas_imagens.map(
    (ele) => {
        return ele.caminho = "imagens/numero_" + ele.valor + ".png";
    }
);*/

minhas_imagens.forEach(
    (ele) => {
        ele.caminho = "imagens/numero_" + ele.valor + ".png";
    }
)


//Manipulando o DOM
minhas_imagens.forEach(
    (ele) => {
        div_imagens.innerHTML += `<img width=100 alt=${ele.caminho} src=${ele.caminho}>`;
    }
);







