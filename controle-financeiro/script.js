document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript carregado corretamente!");
  
    const form = document.getElementById("transaction-form");
    const transactionsList = document.getElementById("transaction-list");
    const balanceDisplay = document.getElementById("balance");
  
    if (!form || !transactionsList) {
      console.error("ERRO: Formulário ou lista de transações não encontrados.");
      return;
    }
  
    console.log("Formulário encontrado com sucesso!");
  
    // Carregar transações do localStorage quando a página é carregada
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
  
    // Exibir as transações já salvas
    transactions.forEach(transaction => {
      addTransactionToTable(transaction.description, transaction.value, transaction.category);
    });
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Impede o recarregamento da página
  
      // Captura os dados do formulário
      const { description, value, category } = getFormData();
  
      if (!description || isNaN(value) || !category) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
      }
  
      // Adiciona a transação ao array de transações
      const newTransaction = { description, value, category };
      transactions.push(newTransaction);
  
      // Salva as transações no localStorage
      localStorage.setItem("transactions", JSON.stringify(transactions));
  
      // Cria e exibe a transação na tabela
      addTransactionToTable(description, value, category);
  
      // Atualiza o saldo total
      updateBalance();
      resetForm();
    });
  
    // Função para capturar os dados do formulário
    function getFormData() {
      const description = document.getElementById("description").value.trim();
      const value = parseFloat(document.getElementById("value").value.replace(",", "."));
      const category = document.getElementById("category").value;
      return { description, value, category };
    }
  
    // Função para adicionar transação na tabela
    function addTransactionToTable(description, value, category) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${description}</td>
        <td>R$ ${value.toFixed(2)}</td>
        <td>${category}</td>
        <td><button class="btn-excluir">X</button></td>
      `;
      transactionsList.appendChild(newRow);
  
      // Funcionalidade de excluir transação
      const deleteButton = newRow.querySelector(".btn-excluir");
      deleteButton.addEventListener("click", function () {
        newRow.remove();
        updateBalance();
        removeTransactionFromStorage(description);
      });
    }
  
    // Função para atualizar o saldo
    function updateBalance() {
      const rows = transactionsList.getElementsByTagName("tr");
      let total = 0;
      for (let row of rows) {
        const valueCell = row.getElementsByTagName("td")[1];
        const value = parseFloat(valueCell.textContent.replace("R$ ", "").replace(",", "."));
        total += value;
      }
      balanceDisplay.textContent = `R$ ${total.toFixed(2)}`;
    }
  
    // Função para remover uma transação do localStorage
    function removeTransactionFromStorage(description) {
      transactions = transactions.filter(transaction => transaction.description !== description);
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  
    // Função para resetar o formulário
    function resetForm() {
      document.getElementById("description").value = "";
      document.getElementById("value").value = "";
      document.getElementById("category").value = "";
    }
  });
  