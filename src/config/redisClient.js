/* eslint-disable no-console */

const redis = require('redis');

const client = redis.createClient(
  process.env.REDIS_PORT,
  process.env.REDIS_HOST
);
const asyncRedis = require('async-redis');

const asyncRedisClient = asyncRedis.decorate(client);

client.on('connect', () => {
  console.log('Bando de dados redis conectado.');
});

client.on('error', err => {
  console.log(`Bando de dados redis não conectado erro${err}`);
});

module.exports = asyncRedisClient;
