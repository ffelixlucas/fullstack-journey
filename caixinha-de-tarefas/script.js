document.addEventListener('DOMContentLoaded', function () {
    // Referências principais aos elementos da interface
    const form = document.getElementById('form-tarefa');
    const input = document.getElementById('input-tarefa');
    const ul = document.getElementById('lista-tarefas');
  
    // Lida com o envio do formulário
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Cria os elementos da tarefa
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.innerText = input.value;
  
      const botao = document.createElement('button');
      botao.innerText = 'Excluir';
  
      // Monta a estrutura da tarefa
      li.appendChild(span);
      li.appendChild(botao);
      ul.appendChild(li);
  
      // Ação de excluir tarefa
      botao.onclick = function () {
        li.remove();
      };
  
      // Ação de editar tarefa
      span.onclick = function () {
        const inputEdit = document.createElement('input');
        inputEdit.value = span.innerText;
  
        span.replaceWith(inputEdit);
        inputEdit.focus();
  
        inputEdit.addEventListener('blur', function () {
          span.innerText = inputEdit.value;
          inputEdit.replaceWith(span);
        });
  
        inputEdit.addEventListener('keydown', function (event) {
          if (event.key === 'Enter') {
            span.innerText = inputEdit.value;
            inputEdit.replaceWith(span);
          }
        });
      };
  
      // Limpa o campo de entrada
      input.value = '';
    });
  });
  