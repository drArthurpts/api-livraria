import express from 'express';
import livros from './livrosRoutes.js';
import app from '../app.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ title: "Curso de Node.js" });
    });

    app.use(express.json(), livros);

}

export default routes;