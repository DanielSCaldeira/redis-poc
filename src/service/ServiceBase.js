/* eslint-disable no-return-await */
const redisInfo = require('redis-info');

const behavior = {
  0: async () => {
    throw new Error('Registro não existe na base de dados');
  },
  1: async (client, chave) => {
    const isDeleted = await client.del(chave);
    return isDeleted === 1;
  },
};

module.exports = client => ({
  Listar: async () => {
    return await client.keys('*');
  },

  Buscar: async chave => {
    return await client.get(chave);
  },

  Verificar: async chave => {
    const e = await client.exists(chave);
    return e !== 0;
  },

  Inserir: async (chave, valor) => {
    return !!(await client.set(chave, valor, 'EX', 3600));
  },

  ExcluirChaves: async () => {
    const resultado = await client.flushdb();
    return resultado === 'OK';
  },

  Excluir: async chave => {
    const e = await client.exists(chave);
    return behavior[e](client, chave);
  },

  Info: res => {
    client.info((err, config) => res.json(redisInfo.parse(config)));
  },
});
