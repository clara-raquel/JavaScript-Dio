var jogador1 = 0;
var jogador2 = 0;
var placar;

if (jogador1 != -1){
    if (jogador1 > 0) {
        console.log("Jogador 1 marcou ponto!");
    } else if (jogador2 > 0){
        console.log("Jogador 2 marcou ponto!");
    } else {
        console.log("Ninguém marcou ponto!");
    }
}

//if ternárrio --   condição ? instrução1 : instrução2;
jogador1 != -1 && jogador2 != -1 ? console.log("Os jogadores são válidos") : console.log("Jogadores inválidos");

//usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log("Jogador 1 marcou ponto!");
    placar = jogador1 > jogador2;
} 

//usando else if
else if (jogador2 > 0 && jogador1 == 0){
    console.log("Jogador 2 marcou ponto!");
    placar = jogador2 > jogador1
} 

//usando else
else {
    console.log("Ninguém marcou ponto!");
}


//switch (${expressão}) {
    //case 1:
    //    ${instrucao};
    //break;
    //case 2 
    //    ${instrucao}
    //break;
    //}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhou!");
        break;
    case placar = jogador2 > jogador1:
        console.log("Jogador 2 ganhou!");
        break;
    default:
        console.log("Ninguém ganhou");
}


let array = [ 'valor1' , 'valor2','valor3', 'valor4', 'valor5'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', }

// for - repetição de instrução ate que a condição seja falsa
//for (condição) {
//    instrução
// }

for (let indice = 0; indice < array.length; indice ++) {
    console.log(indice);
}

// for/ in funciona como uma repetição a partir de uma propriedade 
//for(parentesis para declarar condição) {chaves para declarar instrução};
//com array
for (let i in array) {
    console.log(i);
}
// será impresso isso: vai ser impresso o indice de cada array
//0
//1
//2
//3
//4

// com object
for (i in object) {
    console.log(i);
}
//Será impresso isso: vai percorrer cada propriedade do objeto e imprimir essas propriedades
//propriedade1
//propriedade2
//propriedade3

//for/of - executa repetição a partir de um valor
//com array
for (i of array) {
    console.log(i);
}
/*Será impresso isso: vai imprimir o valor de cada indice da array
valor1
valor2
valor3
valor4
valor5*/

//com object
for (i of object.propriedade1) {
    console.log(i);
}
/*será impresso assim: cada caractere do valor ser´´a impresso em linhas separadas
v
a
l
o
r
1
por ficar uma letra por linha não funciona bem com objetos */

//while
var a = 0;
while (a < 10) {
    a++;
    console.log(a);
}

