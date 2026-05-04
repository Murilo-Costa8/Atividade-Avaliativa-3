let maiorIdade;
let menorIdade;

 for(let i = 1; i <= 5; i++) {
    let idade = parseInt(prompt(`Digite a idade da ${i}ª pessoa`));

    if (i === 1) {
        maiorIdade = idade;
        menorIdade = idade;
    } else {
        if (idade > maiorIdade) {
            maiorIdade = idade;
        }

        if (idade < menorIdade) {
            menorIdade = idade;
        }
    }
 }

 console.log(`A maior idade digitada é: ${maiorIdade} anos.`);
 console.log(`A menor idade digitada é: ${menorIdade} anos.`);