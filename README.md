# Fullstack Journey

Uma jornada completa no desenvolvimento full stack que une teoria e prática para construir aplicações web modernas e escaláveis. Este projeto serve como guia de estudo e portfólio, demonstrando a evolução de um código simples para uma aplicação robusta e profissional.

---

## Índice

- [Visão Geral](#visao-geral)
- [Objetivos](#objetivos)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Jornada Full Stack - Etapas Concluídas](#jornada-full-stack-etapas-concluidas)
- [Instalação e Execução](#instalacao-e-execucao)
- [Fluxo de Trabalho com Git](#fluxo-de-trabalho-com-git)
- [Roadmap](#roadmap)
- [Contribuição](#contribuicao)
- [Licença](#licenca)
- [Contato](#contato)

---

## Visão Geral

O **Fullstack Journey** documenta uma trajetória completa no desenvolvimento full stack, integrando teoria e prática para ensinar desde os fundamentos do frontend (HTML, CSS, JavaScript) até a construção de um backend robusto com Node.js e Express. O projeto também abrange a integração com bancos de dados, autenticação, segurança e deploy, sempre seguindo as melhores práticas de codificação e versionamento.

---

## Objetivos

- **Aprendizado Profundo:**  
  Consolidar os conceitos essenciais do desenvolvimento web moderno.
  
- **Boas Práticas:**  
  Adotar padrões de código, organização profissional e versionamento eficaz.
  
- **Portfólio Real:**  
  Desenvolver uma aplicação completa que demonstre competências full stack.
  
- **Colaboração e Deploy:**  
  Aprender a utilizar Git, GitHub e ferramentas de CI/CD para um fluxo de trabalho colaborativo e de qualidade.

---

## Tecnologias

### Frontend
- **HTML5:** Estrutura semântica e acessível.
- **CSS3:** Flexbox, Grid e Media Queries para layouts responsivos.
- **JavaScript:** ES6+ e recursos modernos.

### Versionamento
- **Git** e **GitHub**

### Backend (planejado para etapas futuras)
- **Node.js** e **Express.js**
- **Banco de Dados:** MySQL, PostgreSQL ou MongoDB.
- **ORMs:** Sequelize ou Prisma.

### Deploy e CI/CD (planejado)
- Ferramentas como **Vercel**, **Netlify**, **Railway**, entre outras.

---

## Estrutura do Projeto

```
fullstack-journey/
├── README.md          # Documentação do projeto
├── .gitignore         # Arquivos e pastas a serem ignorados pelo Git
├── index.html         # Página principal (Frontend)
├── styles.css         # Estilos CSS
└── script.js          # Lógica JavaScript
```

> **Observação:** Conforme o projeto evoluir, novas pastas e arquivos serão adicionados para o backend, testes, deploy e integração contínua.

---

## Jornada Full Stack - Etapas Concluídas

### **1. Fundamentos de HTML e CSS**
- **Estrutura HTML:** Criamos a base do projeto, iniciando com um contador simples e evoluindo para um **Dashboard de Controle Financeiro**.
- **CSS Responsivo:** Implementamos **variáveis CSS** para cores e espaçamento, garantindo um design mais organizado e escalável.
- **Melhoria na Responsividade:** Ajustamos layouts utilizando **Flexbox** e **Media Queries**, garantindo uma boa experiência em diferentes dispositivos.

### **2. Implementação de JavaScript Básico**
- **Manipulação do DOM:** Implementamos a **interatividade** do Dashboard, capturando e exibindo transações dinamicamente.
- **Estruturação do Código:** Aplicamos **funções reutilizáveis** para melhor organização e separação de responsabilidades.
- **Boas Práticas no Versionamento:** Cada avanço foi registrado no **GitHub**, seguindo padrões de commits claros e objetivos.

### **3. Persistência de Dados com localStorage**
- **Armazenamento Local:** Adicionamos suporte para salvar transações no `localStorage`, permitindo que os dados persistam mesmo após o recarregamento da página.
- **Recuperação Automática:** As transações são carregadas automaticamente ao abrir o sistema, garantindo uma **experiência contínua** para o usuário.

### **4. Funcionalidade de Adicionar e Excluir Transações**
- **Adição de Transações:** Criamos um **formulário dinâmico** que permite cadastrar transações com descrição, valor e categoria.
- **Exclusão de Transações:** Cada transação pode ser removida da lista, e os dados são automaticamente atualizados no `localStorage`.
- **Atualização do Saldo:** Sempre que uma transação é adicionada ou excluída, o saldo total é **recalculado automaticamente**.

### **5. Avanço Gradual e Estruturado**
- **Início com Contador:** Começamos com um **contador** simples para reforçar conceitos fundamentais de **JavaScript e manipulação do DOM**.
- **Dashboard de Controle Financeiro:** Evoluímos para um **sistema completo de controle financeiro**, incluindo **cadastro de transações, armazenamento local e atualização do saldo**.

---

## Instalação e Execução

### Requisitos
- **Git**
- **Node.js** (versão LTS recomendada)

### Passos
1. **Clone o repositório:**
   ```bash
   git clone https://github.com/ffelixlucas/fullstack-journey.git
   ```
2. **Acesse o diretório do projeto:**
   ```bash
   cd fullstack-journey
   ```
3. **Abra o projeto:**  
   Utilize seu editor de código favorito e visualize o arquivo `index.html` no navegador.

*Instruções adicionais para execução do backend, testes e deploy serão adicionadas conforme o projeto evolui.*

---

## Fluxo de Trabalho com Git

Adotamos práticas profissionais de versionamento:

- **Commits:**  
  Utilize mensagens claras e descritivas (ex.: `feat: adiciona header com navegação`).

- **Branching:**  
  Crie branches específicas para novas funcionalidades (ex.: `feature/nome-da-funcionalidade`) e utilize pull requests para revisar as mudanças antes de mesclar na branch principal.

- **Integração Contínua:**  
  Planejamos integrar ferramentas de CI/CD para automatizar testes e deploy, garantindo um fluxo de trabalho eficiente e profissional.

---

## Roadmap

1. **Setup Inicial:**  
   Estrutura básica com HTML, CSS e JavaScript.
2. **Aprofundamento em JavaScript:**  
   Implementação de conceitos modernos (ES6+, modularização, etc.).
3. **Integração com Git/GitHub:**  
   Práticas avançadas de versionamento e colaboração.
4. **Desenvolvimento Backend:**  
   Criação de APIs RESTful com Node.js e Express.
5. **Banco de Dados:**  
   Integração com banco de dados e utilização de ORMs.
6. **Autenticação e Segurança:**  
   Implementação de login seguro com JWT e criptografia.
7. **Deploy e CI/CD:**  
   Configuração de deploy automático e integração contínua.

---

