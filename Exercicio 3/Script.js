let n = parseInt(prompt("Digite um número:"));

if (isNaN(n) || n <= 0) {
    alert ("Digite um numero válido.");
} else {
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    alert (`A soma dos números de 1 até ${n} é: ${soma}`);
}