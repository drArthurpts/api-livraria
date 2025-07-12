import { json } from 'express';
import livro from '../models/livro.js';

class LivroController {
    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = new livro(req.body);
            await novoLivro.save();
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
        try{
            const { id } = req.params.id; 
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
};

export default LivroController;