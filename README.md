# 📝 Minha Lista de Tarefas com Angular

Este projeto é um aplicativo de gerenciamento de tarefas (To-Do List) desenvolvido para praticar os fundamentos do framework Angular. A aplicação permite criar, marcar como concluída e excluir tarefas, com os dados sendo salvos diretamente no navegador.

## 🚀 O que eu aprendi e pratiquei:

Neste projeto, percorri desde a configuração inicial até a publicação no GitHub, dominando os seguintes conceitos:

- **Componentes Standalone**: Estrutura moderna do Angular (v17+) que dispensa o uso de módulos complexos.
- **Two-way Data Binding (`[(ngModel)]`)**: Sincronização em tempo real entre o que o usuário digita no HTML e a lógica no TypeScript.
- **Diretivas Estruturais**:
  - `*ngFor`: Para renderizar a lista de tarefas dinamicamente.
  - `*ngIf`: Para exibir mensagens condicionais, como "Sua lista está vazia!".
- **Persistência com LocalStorage**: Uso da API do navegador para salvar as tarefas, garantindo que elas não sumam ao atualizar a página (F5).
- **Estilização Dinâmica**: Aplicação de estilos CSS (como o texto riscado) baseados no estado da tarefa (concluída ou não).
- **Interface e Tipagem**: Uso de Interfaces TypeScript para definir a estrutura dos dados das tarefas.

## 🛠️ Tecnologias Utilizadas:

- Angular 17+
- TypeScript
- HTML / CSS
- Git & GitHub

## 🏁 Como rodar o projeto:

1. Clone o repositório.
2. Execute `npm install` para instalar as dependências.
3. Execute `ng serve` para iniciar o servidor local.
4. Abra o navegador em `http://localhost:4200`.
