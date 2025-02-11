document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript carregado corretamente!");

  const form = document.getElementById("transaction-form");
  const descriptionInput = document.getElementById("description");
  const valueInput = document.getElementById("value");
  const categoryInput = document.getElementById("category");
  const transactionsList = document.getElementById("transaction-list"); // Certifique-se de que o ID está correto no HTML


  if (!form) {
    console.error("ERRO: O formulário NÃO FOI ENCONTRADO no HTML.");
    return;
  }

  console.log("Formulário encontrado com sucesso!");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Captura os valores digitados pelo usuário
    const description = descriptionInput.value.trim();
    let value = valueInput.value.trim();
    value = value.replace(",", "."); // substitui vírgula por ponto
    value = parseFloat(value);
    const category = categoryInput.value; //

    // Verifica se os campos estão preenchidos corretamente
    if (description === "" || isNaN(value) || category === "") {
      console.error("Erro: Todos os campos são obrigatórios.");
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    console.log("Transação capturada:", { description, value, category });

    // criar um novo elemento na tabela
    const newRow = document.createElement("tr");
    newRow.innerHTML = `         
                <td>${description}</td>
                <td>R$ ${value.toFixed(2)}</td>
                <td>${category}</td>
                <td><button class="btn-excluir">X</button></td>
            `;

    // Adicionar a nova linha na tabela
    transactionsList.appendChild(newRow);

    // Limpar os campos do formulário
    descriptionInput.value = "";
    valueInput.value = "";
    categoryInput.value = "";
  });
});
