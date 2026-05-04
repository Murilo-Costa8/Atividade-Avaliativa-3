let total = 0;
let preco = -1;

console.log("Sistema de Caixa - Digite 0 para finalizar");

while (preco !== 0 ) {
    preco = parseFloat(prompt("Digite o preço do produto:"));
    if (preco > 0) {
        total = total + preco;
        console.log(`Produto de R$ ${preco.toFixed(2)} adicionado.`);
    } else if (preco < 0) {
        console.log("Preço inválido! Digite valores positivos.");
    }
}
console.log ("---");
console.log (`VALOR TOTAL DA COMPRA: R$ ${total.toFixed(2)}`);