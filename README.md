# Livraria

Projeto de API REST para gerenciamento de livros, desenvolvido em Node.js com Express e MongoDB.

## Funcionalidades

- Listar todos os livros
- Buscar livro por ID
- Adicionar novo livro
- Atualizar livro existente
- Remover livro
- Listar autores
- Buscar autor por ID
- Adicionar novo autor
- Atualizar autor existente
- Remover autor
- Filtrar livros por editora
- Relacionar livros com autores

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
    autor.js
  controllers/
    livroController.js
    autorController.js
  routes/
    livrosRoutes.js
    autoresRoutes.js
```

## Endpoints

### Livros

- `GET /livros` — Lista todos os livros
- `GET /livros/:id` — Busca um livro pelo ID
- `POST /livros` — Adiciona um novo livro
- `PUT /livros/:id` — Atualiza um livro existente
- `DELETE /livros/:id` — Remove um livro
- `GET /livros/busca?editora=nome` — Filtra livros por editora

### Autores

- `GET /autores` — Lista todos os autores
- `GET /autores/:id` — Busca um autor pelo ID
- `POST /autores` — Adiciona um novo autor
- `PUT /autores/:id` — Atualiza um autor existente
- `DELETE /autores/:id` — Remove um autor

---

Desenvolvido para fins