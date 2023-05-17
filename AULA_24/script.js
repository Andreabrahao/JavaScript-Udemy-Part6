let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimeNumeros(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimeNumeros(num,num1,num2);
console.log('Pausa');
imprimeNumeros(num2,num3);
console.log('Pausa');
imprimeNumeros(2,6,7,8,9,5,3,2,5,6,2,4,5);

//Os argumentos sao transformados em array.