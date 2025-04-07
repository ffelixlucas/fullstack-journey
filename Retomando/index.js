let tarefa = document.getElementById("novaTarefa");
let adicionar = document.getElementById("adicionar");
let erro = document.getElementById("erroTarefa");
let lista = document.getElementById("lista");

adicionar.onclick = function (event) {
  event.preventDefault();

  if (tarefa.value.trim() === "") {
    tarefa.placeholder = "Campo Obrigatorio";
    tarefa.classList.add("erro");
    tarefa.focus()
  } else {


    tarefa.placeholder = "Digite uma tarefa";
    let li = document.createElement("li");
    li.innerText = tarefa.value;
    lista.appendChild(li);

    li.onclick = function () {
        console.log("clicou no li")
      }
      
    erro.innerText = "";
    tarefa.classList.remove("erro");


    let excluir = document.createElement("button")
    excluir.innerText = "Excluir"
    excluir.type = "button"
    li.appendChild(excluir);
    excluir.onclick = function () {li.remove();}

    tarefa.value = "";
  }
};
