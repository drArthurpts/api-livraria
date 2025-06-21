import express from 'express';
import conectaNaDatabase from './config/dbConnect.js'; 

const conexao = await conectaNaDatabase();

conexao.on('error', (erro) => console.log(`Erro na conexão: ${erro}`));

conexao.once('open', () => console.log('Conexão com o banco feita com sucesso!'));

const app = express();
app.use(express.json()); 

const livros = [
    { 
      id: 1, 
      titulo: 'O Senhor dos Anéis', 
    },
    { 
      id: 2, 
      titulo: 'O Hobbit', 
    }
];

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id === parseInt(id));
};

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node.js'); 
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);  
}); 

app.post('/livros', (req, res) => {
    const livro = req.body;
    livros.push(livro);
    res.status(201).send(`Livro ${livro.titulo} adicionado com sucesso!`);
});

app.put('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete('/livros/:id', (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send(`Livro removido com sucesso!`);
});

export default app;



