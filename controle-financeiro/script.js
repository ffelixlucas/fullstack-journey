document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado corretamente!");
  
    const form = document.getElementById("transaction-form");
    const transactionsList = document.getElementById("transaction-list");
  
    if (!form || !transactionsList) {
      console.error("ERRO: Formulário ou lista de transações não encontrados.");
      return;
    }
  
    console.log("Formulário encontrado com sucesso!");
  
    form.addEventListener("submit", handleFormSubmit);
  
    function handleFormSubmit(event) {
      event.preventDefault(); // Impede o recarregamento da página
  
      // Captura e valida os dados do formulário
      const { description, value, category } = getFormData();
  
      if (!description || isNaN(value) || !category) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
      }
  
      // Cria e exibe a nova transação
      addTransactionToTable(description, value, category);
  
      // Atualiza o saldo total
      updateBalance();
      resetForm();
    }
  
    function getFormData() {
      const description = document.getElementById("description").value.trim();
      const value = parseFloat(document.getElementById("value").value.replace(",", "."));
      const category = document.getElementById("category").value;
      return { description, value, category };
    }
  
    function addTransactionToTable(description, value, category) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${description}</td>
        <td>R$ ${value.toFixed(2)}</td>
        <td>${category}</td>
        <td><button class="btn-excluir">X</button></td>
      `;
  
      // Adiciona a nova linha à tabela
      transactionsList.appendChild(newRow);
  
      // Adiciona a funcionalidade de exclusão
      const deleteButton = newRow.querySelector(".btn-excluir");
      deleteButton.addEventListener("click", function () {
        newRow.remove();
        updateBalance();
      });
    }
  
    function updateBalance() {
      const balanceDisplay = document.getElementById("balance");
      const rows = transactionsList.getElementsByTagName("tr");
      let total = 0;
      for (let row of rows) {
        const valueCell = row.getElementsByTagName("td")[1];
        const value = parseFloat(valueCell.textContent.replace("R$ ", "").replace(",", "."));
        total += value;
      }
      balanceDisplay.textContent = `R$ ${total.toFixed(2)}`;
    }
  
    function resetForm() {
      document.getElementById("description").value = "";
      document.getElementById("value").value = "";
      document.getElementById("category").value = "";
    }
  });
  