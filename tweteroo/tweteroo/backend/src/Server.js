import express, { response } from 'express';
import cors from 'cors';
import chalk from 'chalk';
//imports

const server = express();
server.use(cors());
server.use(express.json());

const users = [];

const tweets = [];

server.post('/sign-up', (request, response) => {
  users.push({ username: request.body.username, avatar: request.body.avatar });
  response.send(users);
  response.send('OK');
});

server.post('/tweets', (request, response) => {
  const avatar = users.find(user => user.username === request.body.username);
  tweets.push({
    username: request.body.username,
    tweet: request.body.tweet,
    avatar: avatar.avatar
  });
  const lastTen = tweets.filter((tweet, index) => index < 10);
  response.send(lastTen);
  response.send('OK');
});

server.get('/tweets', (request, response) => {
  const lastTen = tweets.filter((tweet, index) => index < 10);
  response.send(lastTen);
});

server.listen(5000, () => {
  console.log(chalk.cyan('Servidor rodando na porta 5000'));
});
