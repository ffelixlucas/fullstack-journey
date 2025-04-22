# 📋 Lista de Tarefas Inteligente (JS Puro)

Este projeto foi desenvolvido como parte da minha jornada de aprendizado em JavaScript puro.  
O objetivo é aplicar e evoluir conceitos fundamentais de programação de forma progressiva e prática, sempre com código limpo, organizado e com propósito real.

---

## 🧱 Versões do Projeto

| Versão | Funcionalidades |
|--------|------------------|
| [main.js](./main.js) | Concluir tarefas e exibir apenas pendentes |
| [versao-2-remocao.js](./versao-2-remocao.js) | Remover e adicionar tarefas dinamicamente |

---

## ✅ Versão 1 — Conclusão de Tarefas

### 📌 Funcionalidades:
- Armazena tarefas em um array de objetos
- Marca uma tarefa como concluída via `concluirTarefa(numero)`
- Exibe apenas as tarefas **não concluídas**
- Usa contador separado para numerar a exibição corretamente

### 📘 Conceitos aplicados:
- Arrays de objetos
- Condicionais com `if`
- Loops com `for`
- Boas práticas de identação
- Separação entre exibição e dados internos

### 📂 Arquivo: `main.js`

---

## ✨ Versão 2 — Remoção e Adição de Tarefas

### 📌 Novas funcionalidades:

- `removerTarefa(numero)`  
  Remove uma tarefa do array com `.splice()`

- `adicionarTarefa(nome)`  
  Adiciona uma nova tarefa no final da lista com `.push()`

- `converterNumeroParaIndice(numero)`  
  Função auxiliar para padronizar a conversão de número visível para índice real

### 📘 Conceitos aplicados:
- Criação de funções reutilizáveis
- Uso de `.splice()` para manipulação de arrays
- Uso de `.push()` para crescimento dinâmico da lista
- Código limpo com responsabilidade única

### 📂 Arquivo: `versao-2-remocao.js`

---

## 🚀 Objetivo do projeto

Este projeto representa uma etapa importante na minha transição de um programador iniciante para um desenvolvedor com base sólida.  
Ele marca o momento onde parei de copiar código e comecei a **pensar e construir com clareza.**

---

**Lucas Felix — Desenvolvedor Full Stack em evolução constante 🚀**
