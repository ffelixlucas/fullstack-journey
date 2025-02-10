let contador = 0;

const valor = document.getElementById("valor");
const botaoAumentar = document.getElementById("aumentar");
const botaoDiminuir = document.getElementById("diminuir");
const botaoZerar = document.getElementById("zerar");

function aumentar() {
  contador++;
  valor.textContent = contador;
  if (contador % 2 === 0) {
    valor.style.color = "green"; // Par fica verde
  } else {
    valor.style.color = "red"; // Impar fica vermelho
  }
}

function diminuir() {
    if (contador > 0) {
      contador--;
      valor.textContent = contador;
  
      if (contador === 0) {
        valor.style.color = "black"; // Zero volta para preto
      } else if (contador % 2 === 0) {
        valor.style.color = "green"; // Par fica verde
      } else {
        valor.style.color = "red"; // Ímpar fica vermelho
      }
    }
  }

function zerar() {
  contador = 0;
  valor.textContent = contador;
  if (contador === 0) {
    valor.style.color = "black"; // Zero volta para preto
  }
}

botaoAumentar.addEventListener("click", aumentar);
botaoDiminuir.addEventListener("click", diminuir);
botaoZerar.addEventListener("click", zerar);
