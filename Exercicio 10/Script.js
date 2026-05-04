const numeroSorteado = Math.floor(Math.random() * 10) + 1;

let palpite = -1;
let tentativa = 0;

console.log("Jogo da adivinhação iniciado!");

while(palpite !== numeroSorteado) {
    palpite = parseInt (prompt("Tente adivinhar o número entre 1 e 10:"));
    tentativa++;
    
    if (palpite !== numeroSorteado) {
        alert("Errou! Tente novamente.");
    }
}

alert(`Parabéns, você acertou em ${tentativa} tentativas!`);