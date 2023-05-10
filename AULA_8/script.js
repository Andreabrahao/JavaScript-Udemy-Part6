let carro = {
    portas: 2,
    portaMalas: '200l',
    motor: '2.0'
}

let adicionais = {
    tetoSolar: true,
    arCondicionado: true,
}

console.log(carro);
//Importante dar este espaco
Object.assign(carro, adicionais);

console.log(carro);

//Object.assign - Serve para fundir os dois objetos acima.