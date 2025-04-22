const tarefa = [
  { nome: "1 Estudar JS com foco", concluida: false },
  { nome: "2 Aplicar conhecimento", concluida: false },
  { nome: "Alcançar um lugar", concluida: false },
];



function concluirTarefa(numero)  {

let indice = numero - 1;
tarefa[indice].concluida = true;
};

concluirTarefa(3)

let contador = 1;
for (let i = 0; i < tarefa.length; i++) {
  if (!tarefa[i].concluida) {
    console.log(`${contador}. ${tarefa[i].nome}`);
    contador++;
  }
}
