/* eslint-disable no-console */
const app = require('./app');

app.listen(process.env.SERVER_PORT, () =>
  console.log('Servidor rodando http://localhost:9090')
);
