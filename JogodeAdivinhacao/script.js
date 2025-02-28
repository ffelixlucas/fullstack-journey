let numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log(numeroSecreto);

const botao = document.getElementById("button");
const inputChute = document.getElementById("inputChute");
const mensagem = document.getElementById("mensagem");
const contadorTentativas = document.getElementById("tentativas");


let tentativas = 0;

botao.addEventListener("click", function () {
  let chute = parseInt(inputChute.value);
  if (isNaN(chute)) {
    mensagem.innerHTML = "Por favor, digite um número válido";
    return;
  }
  if (numeroSecreto === chute) {
    mensagem.innerHTML = "Parabéns! Você acertou!";
    inputChute.focus();
    inputChute.style.color = "green"; 
    mensagem.style.color = "green";
  } else {
    inputChute.value = "";
    inputChute.focus();
    mensagem.innerHTML = "Não está certo, tente novamente";
  }
    tentativas++; contadorTentativas.innerHTML = "Tentativas: " + tentativas;
});
