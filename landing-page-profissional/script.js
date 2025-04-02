// script.js

// Boa prática: usar funções para encapsular lógica
function init() {
    // Seleciona o elemento do header para um exemplo de manipulação
    const header = document.querySelector('header');
    
    // Exemplo de manipulação: adicionar uma classe que pode ser utilizada para animações
    header.classList.add('iniciado');
    
    // Debug: imprimir mensagem no console para confirmar que o script foi executado
    console.log("Script iniciado, DOM manipulado com sucesso!");
}

// Utilizando o DOMContentLoaded para garantir que o DOM esteja pronto
document.addEventListener('DOMContentLoaded', init);
