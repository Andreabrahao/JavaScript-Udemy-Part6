let carros = ["BMW", "Audi", "VW", "Fiat"];

let removePrimeiroCarro = carros.shift();

console.log(removePrimeiroCarro);
console.log(carros);

carros.unshift('Marea');
console.log(carros);
console.log(carros[0]);

// Let + nome da funcao + .shift(); = Remove o primeiro elemento do array.
// Nome do array + .unshift('nome do elemento adicionado') = Adiciona um elemento a primenira posicao do array.