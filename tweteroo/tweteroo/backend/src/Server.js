import express, { response } from 'express';
import cors from 'cors';
import chalk from 'chalk';
//imports

const server = express();
server.use(cors());
server.use(express.json());

const users = [
  {
    username: 'bobesponja',
    avatar:
      'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info'
  }
];

const tweets = [
  {
    username: 'bobesponja',
    tweet: 'eu amo o hub'
  }
];

server.post('/sign-up', (request, response) => {
  users.push({ username: request.body.username, avatar: request.body.avatar });
  response.send(users);
});

server.post('/tweets', (request, response) => {
  tweets.push({
    username: request.body.username,
    tweet: request.body.tweet
  });
  const lastTen = tweets.filter((tweet, index) => index < 10);
  response.send(lastTen);
});

server.get('/tweets', (request, response) => {
  const lastTen = tweets.filter((tweet, index) => index < 10);
  response.send(lastTen);
});

server.listen(5000, () => {
  console.log(chalk.cyan('Servidor rodando na porta 5000'));
});
