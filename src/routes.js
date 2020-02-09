const { Router } = require('express');
const RedisControlller = require('./controller/RedisController');

const routes = Router();

routes.get('/Listar', RedisControlller.Listar);

routes.get('/Buscar', RedisControlller.Buscar);

routes.get('/Verifica', RedisControlller.Verifica);

routes.get('/Inserir', RedisControlller.Inserir);

routes.get('/Excluir', RedisControlller.Excluir);

routes.get('/ExcluirChaves', RedisControlller.ExcluirChaves);

routes.get('/Info', RedisControlller.Info);

module.exports = routes;
