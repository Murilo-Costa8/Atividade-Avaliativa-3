let senhaCorreta = prompt("Digite qual senha você ira usar:");

let tentativa = prompt ("Digite a senha");

while (tentativa != senhaCorreta) {
    alert = ("Erro! Tente denovo");
    tentativa = prompt ("Digite a senha novamente:");
} 
alert ("Seja bem-vindo!");