## Overview

Ele é uma API REST simples que serve para responder às requisições HTTP enviadas pelo FrontEnd.

A API consiste em um cadastro simples de clientes.

As principais tecnologias utilizadas são as seguintes:

-   Git
-   Typescript
-   NodeJS
-   ExpressJS
-   Docker
-   Postgres
-   Prisma ORM

## Como rodar o projeto?

Pra rodar o projeto, você vai precisar ter o NodeJS e o Docker instalados em seu computador.

Todos os comandos de terminal mencionados abaixo devem ser executados a partir da pasta raiz do projeto.

1. Copie o conteúdo do arquivo `.env.example` e cole em um novo arquivo chamado `.env`
2. Execute o seguinte comando: `docker compose up -d`
3. Execute o seguinte comando: `npm install`
4. Execute o seguinte comando: `npx prisma migrate dev && npx prisma generate`
5. Reinicie o VSCode (recomendado, senão o editor vai acusar erros onde não tem)
6. Execute o seguinte comando: `npm run dev`

Boa sorte! :D

## Nota

Eventualmente você pode ter o seguinte erro quando executar o comando `npm run dev`:

```
Error: listen EADDRINUSE: address already in use :::8080
```

Se estiver usando Ubuntu ou WSL 2 com Ubuntu, execute o seguinte comando para finalizar o programa que está usando a porta 8080:

```
sudo kill -9 `sudo lsof -t -i:8080`
```

Então, execute `npm run dev` novamente.

Ou, como alternativa, você pode trocar a porta utilizada pela API. Para isso mude a variável de ambiente `PORT` através do arquivo `.env`. Se você optar por essa opção, não esqueça de ajustar o FrontEnd para que as requisições sejam enviadas para a porta correta.
