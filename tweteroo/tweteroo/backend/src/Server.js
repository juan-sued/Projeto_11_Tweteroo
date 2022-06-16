import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
//imports

const server = express();

server.use(cors());

server.listen(
  (5000,
  () => {
    console.log(chalk.cyan('Servidor rodando na porta 5000'));
  })
);
