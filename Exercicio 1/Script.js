let contador = 10;

const contagem = setInterval(() => {
  if (contador > 0) {
    console.log(contador);
    contador--;
  } else {
    console.log("0");
    console.log("DECOLAGEM! 🚀");
    clearInterval(contagem);
  }
}, 1000);
