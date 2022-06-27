// Crie um objeto que receba ao menos três propriedades sobre você.

let marcosPaulo = {
    nomeCompleto: "Marcos Paulo Oliveira Pontes",
    idade: 17,
    bandaFavorita: "Red Hot Chili Peppers"
};

console.log(marcosPaulo);

// Adicione uma nova propriedade sem alterar seu objeto inicial.

marcosPaulo.instrumentos = "Contrabaixo e Guitarra";

console.log(marcosPaulo);

// Remova uma propriedade desse objeto.

delete marcosPaulo.idade;

//Mostre no console todas as propriedades desse objeto.

console.log(marcosPaulo);

// Crie um array chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome, idade, telefone, amigos.
//Na propriedade amigos, adicione ao menos 4 itens.


let cadastro = [
{
    nome: "Luiza",
    idade: 16,
    telefone: 987656787,
    amigos: ["Inajara", "Esmeralda", "Yasmin", "Enzo"]
},
{
    nome: "Lanna",
    idade: 17,
    telefone: 934745345,
    amigos: ["Marcos Paulo", "Kézia", "Pedro", "Júlia"]
},
{
    nome: "Inajara",
    idade: 38,
    telefone: 912645678,
    amigos: ["Luiza", "Marcos Paulo", "Esmeralda", "Yasmin"]
},
{
    nome: "Esmeralda",
    idade: 58,
    telefone: 912323435,
    amigos: ["Yasmin", "Inajara", "Luiza", "Marcos Paulo"]
},
{
    nome: "Yasmin",
    idade: 29,
    telefone: 984523455,
    amigos: ["Esmeralda", "Marcos Paulo", "Inajara", "Yasmin"]
}
];

console.log(cadastro);

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0]);
console.log(cadastro[1].amigos[0]);
console.log(cadastro[2].amigos[0]);
console.log(cadastro[3].amigos[0]);
console.log(cadastro[4].amigos[0]);