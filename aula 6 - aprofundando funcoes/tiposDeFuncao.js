//tipos de função

//declarativas
function funcao() {
    console.log("Sou uma mensagem de uma função declarativa!");
}

funcao();

//expressao de funçao
//com nomeação
var funcao = function funcao() {
    console.log("Sou uma mensagem de função de expessão com nomeação!");
}
funcao();

//sem nomeação
var funcao = function() {
    console.log("Sou uma mensagem de função de expessão sem nomeação!");
}
funcao();

// arrow function sempre serão anonimas, portanto não podem ser nomeadas
var funcao = () => {
    console.log("Sou uma mensagem de uma arrow function!");
}
funcao();



