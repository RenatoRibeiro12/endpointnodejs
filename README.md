## Esse projeto foi desenvolvido de forma bem basica, apanhei muito no metodo PUT mais com ajuda dos colegas consegui implementar.

## Requisitos

- Node.js v18.17.1 ou superior.
- NPM 9.6.7 ou superior.
- Instalar Nodemon

## Instalação

Para instalar e executar o projeto, siga os passos abaixo:

1. Clone o repositório (SSH)

```bash
  git clone git@github.com:RenatoRibeiro12/endpointnodejs.git
```
ou

Clone o repositório (HTTPS)

```bash
  git clone https://github.com/RenatoRibeiro12/endpointnodejs.git
```

2. Instale as dependências

   "body-parser": "^1.20.2",
   "express": "^4.18.2"


3. Para executar o projeto

```bash
  npm run start
```

4. Acesse a documentação da API

```bash
http://localhost:3000/api-docs
```

## Visão geral da API

A API foi projetada para ser fácil e simples de usar. Abaixo estão alguns pontos importantes para começar:

- **Base URL**: O endpoint base para todas as chamadas da API é [http://localhost:4000].


## Recursos principais e Exemplos

### 1. Listar tarefas

Retorna uma lista de todos as tarefas.

- **Endpoint**: `/tarefas`
- **Método**: `GET`


### 2. Criar tarefa

Cria uma nova tarefa.

- **Endpoint**: `/tarefas`
- **Método**: `POST`



```json
{
  "tarefa": "criando tarefa 1"
}
```

### 3. Atualizar tarefa

Atualiza uma tarefa específica.

- **Endpoint**: `/tarefas/:id`
- **Método**: `PUT`

**Exemplo:**
```json
{
  "tarefa": "a tarefa 1 foi atualizada"
}
```

### 4. Deletar tarefa

Deleta uma tarefa específica.

- **Endpoint**: `/tarefas/:id`
- **Método**: `DELETE`

## Agradeço a todos da Campinho e também o pessoal do curso, sei que tenho muito a prender e vou conseguir ##
