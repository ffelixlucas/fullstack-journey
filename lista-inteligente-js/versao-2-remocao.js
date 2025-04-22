const tarefa = [
  { nome: " Estudar JS com foco", concluida: false },
  { nome: " Aplicar conhecimento", concluida: false },
  { nome: "Alcançar um lugar", concluida: false },
];

function converterNumeroParaIndice(numero) {
  return numero - 1;
}

function concluirTarefa(numero) {
  let indice = converterNumeroParaIndice(numero);
  tarefa[indice].concluida = true;
}

function removerTarefa(numero) {
  let indice = converterNumeroParaIndice(numero);
  tarefa.splice(indice, 1);
}

function adicionarTarefa(nome) {
    tarefa.push({
        nome: nome,
        concluida: false
    });
}

adicionarTarefa("Continuar Evoluindo")

let contador = 1;
for (let i = 0; i < tarefa.length; i++) {
  if (!tarefa[i].concluida) {
    console.log(`${contador}. ${tarefa[i].nome}`);
    contador++;
  }
}
