let penultimo = 0;
let ultimo = 1;

console.log(penultimo);
console.log(ultimo);

for (let i = 3; i <= 10; i++){
    let proximo = penultimo + ultimo;
    console.log(proximo);

penultimo = proximo;
ultimo = proximo;
}