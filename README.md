# Todo Frontend

Interface de usuário para o sistema de gerenciamento de tarefas (Todo List), construída com Angular.

## Stack Tecnológica

* Angular 21.2.0
* TypeScript 5.9.2
* RxJS 7.8.0
* Componentes Standalone

## Funcionalidades

* Listagem de tarefas pendentes e concluídas.
* Criação de novas tarefas na lista.
* Atualização do status da tarefa para concluída.
* Exclusão de tarefas existentes.

## Integração

A aplicação consome uma API RESTful. O serviço HTTP está configurado para apontar para o seguinte endpoint do backend local:
`http://localhost:8080/todo-backend-1.0.0/api/tarefas`

## Configuração do Ambiente e Execução

Certifique-se de ter o Node.js e o npm instalados. Execute os comandos abaixo no terminal para iniciar o projeto:

1. Instale todas as dependências do projeto contidas no `package.json`.
2. Inicie o servidor de desenvolvimento.
