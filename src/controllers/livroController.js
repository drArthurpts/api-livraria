import { json } from 'express';
import livro from '../models/Livro.js';
import { autor } from '../models/Autor.js';

class LivroController {
    static async cadastrarLivro(req, res) {
        const novoLivro = req.body;
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc}};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json(novoLivro);
        } catch (erro) {
            res.status(500).json({ message: `Erro ao cadastrar livro: ${erro.message}` });
        }
    }

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `Erro ao listar livros: ${erro.message}` });
        }

    }

    static async listarLivroPorId(req, res) {
        const { id } = req.params;
        try {
            const livroEncontrado = await livro.findById(id);
            if (!livroEncontrado) {
                return res.status(404).json({ message: 'Livro não encontrado' });
            }
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `Erro ao buscar livro: ${erro.message}` });
        } 
    }

    static async atualizarLivro(req, res) {
        try {
            const { id } = req.params;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Livro atualizado com sucesso!' });
        } catch (erro) {
            res.status(500).json({ message: `Erro ao atualizar livro: ${erro.message}` });
        }
    }

    static async deletarLivro(req, res) {
        const { id } = req.params;
        try {
            const livroDeletado = await livro.findByIdAndDelete(id);
            if (!livroDeletado) {
                return res.status(404).json({ message: 'Livro não encontrado' });
            }
            res.status(200).json({ message: 'Livro deletado com sucesso!' });
        } catch (erro) {
            res.status(500).json({ message: `Erro ao deletar livro: ${erro.message}` });
        }
    }

    static async listarLivrosPorEditora(req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            if (livrosPorEditora.length === 0) {
                return res.status(404).json({ message: 'Nenhum livro encontrado para esta editora' });
            }
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({ message: `Erro ao buscar livros por editora: ${erro.message}` });
        }
    }
};

export default LivroController;