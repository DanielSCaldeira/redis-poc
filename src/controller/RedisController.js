const redisInfo = require('redis-info');
const service = require('../service/ServiceBase');
const asyncRedisClient = require('../config/redisClient');

class RedisController {
  async Listar(req, res) {
    const resultado = await service(asyncRedisClient).Listar();
    return res.json(resultado);
  }

  async Buscar(req, res) {
    const resultado = await service(asyncRedisClient).Buscar(req.query.chave);
    return res.send(resultado);
  }

  async Verifica(req, res) {
    const resultado = await service(asyncRedisClient).Verificar(
      req.query.chave
    );
    return res.json(resultado);
  }

  async Inserir(req, res) {
    console.log(req.query);
    const resultado = await service(asyncRedisClient).Inserir(
      req.query.chave,
      req.query.valor
    );
    return res.json(resultado);
  }

  async Excluir(req, res) {
    const resultado = await service(asyncRedisClient).Excluir(req.query.chave);
    return res.send(resultado);
  }

  async ExcluirChaves(req, res) {
    const resultado = await service(asyncRedisClient).ExcluirChaves();
    return res.json(resultado);
  }

  Info(_, res) {
    asyncRedisClient.info((err, config) => res.json(redisInfo.parse(config)));
  }
}

module.exports = new RedisController();
