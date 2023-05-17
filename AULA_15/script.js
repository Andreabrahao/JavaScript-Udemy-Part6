let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nums.slice(4,5));
console.log(nums.slice(4,6));

console.log(nums.slice(2)); //Conta do segundo array ate o final pois nao tem um final definido.

console.log(nums.slice(-2)); //Conta de tras para frente a pega os dois ultimos arrays.

console.log(nums.slice(3, -2)); //Conta do terceiro array tirando os dois ultimos.