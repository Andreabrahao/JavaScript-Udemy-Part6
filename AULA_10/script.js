let pessoa = {
    nome: "Andre"
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Marlin"
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "zezin";
console.log(pessoa.nome);

pessoa.nome = "dasCove";
console.log(pessoa2.nome);