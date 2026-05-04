let numero = parseInt(prompt("Digite um número inteiro:"));
let resultado = 1;

console.log(`Calculando o fatorial de: ${numero}`);

for (let i = numero; i >= 1; i--){
    resultado = resultado * i;

    console.log(`Multiplicando por ${i}... total parcial: ${resultado}`);
}
console.log(`Fatorial de ${numero} é: ${resultado}`);