import { json } from 'express';
import { autor } from '../models/Autor.js';


class AutorController {
    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = new autor(req.body);
            await novoAutor.save();
            res.status(201).json(novoAutor);
        } catch (erro) {
            res.status(500).json({ message: `Erro ao cadastrar autor: ${erro.message}` });
        }
    }

    static async listarAutores(req, res) {
        try {
            const listarAutores = await autor.find({});
            res.status(200).json(listarAutores);
        } catch (erro) {
            res.status(500).json({ message: `Erro ao listar autores: ${erro.message}` });
        }
    }


    static async listarAutorPorId(req, res) {
        const { id } = req.params;
        try {
            const autorEncontrado = await autor.findById(id);
            if (!autorEncontrado) {
                return res.status(404).json({ message: 'autor não encontrado' });
            }
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `Erro ao buscar autor: ${erro.message}` });
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const { id } = req.params;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'autor atualizado com sucesso!' });
        } catch (erro) {
            res.status(500).json({ message: `Erro ao atualizar autor: ${erro.message}` });
        }
    }

    static async deletarAutor(req, res) {
        const { id } = req.params;
        try {
            const autorDeletado = await autor.findByIdAndDelete(id);
            if (!autorDeletado) {
                return res.status(404).json({ message: 'autor não encontrado' });
            }
            res.status(200).json({ message: 'Autor deletado com sucesso!' });
        } catch (erro) {
            res.status(500).json({ message: `Erro ao deletar autor: ${erro.message}` });
        }
    }
};

export default AutorController;