# Livraria

Projeto de API REST para gerenciamento de livros, desenvolvido em Node.js com Express e MongoDB.

## Funcionalidades

- Listar todos os livros
- Buscar livro por ID
- Adicionar novo livro
- Atualizar livro existente
- Remover livro

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- dotenv

## Como rodar o projeto

1. Clone o repositório.
2. Instale as dependências:

   ```sh
   npm install
   ```

3. Configure o arquivo `.env` com a sua string de conexão do MongoDB.
4. Inicie o servidor em modo desenvolvimento:

   ```sh
   npm run dev
   ```

5. O servidor estará disponível em [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

```
.env
.gitignore
package.json
server.js
src/
  app.js
  config/
    dbConnect.js
  models/
    livro.js
```

## Endpoints

- `GET /` — Mensagem de boas-vindas
- `GET /livros` — Lista todos os livros
- `GET /livros/:id` — Busca um livro pelo ID
- `POST /livros` — Adiciona um novo livro
- `PUT /livros/:id` — Atualiza um livro existente
- `DELETE /livros/:id` — Remove um livro

---

Desenvolvido para fins de estudo .