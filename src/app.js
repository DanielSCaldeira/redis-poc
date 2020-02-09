/* eslint-disable no-console */
require('dotenv/config'); // aplicação entender o arquivo .env
const express = require('express');
require('express-async-errors'); // tratar excessões utilizando async await
const Youch = require('youch'); // cria corpo da exceção de forma amigável
const routes = require('./routes'); // routes da aplicação

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {}

  routes() {
    this.server.use(express.json());
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      const error = await new Youch(err, req).toJSON();
      console.error(err);
      return res.status(500).json(error);
    });
  }
}

module.exports = new App().server;
