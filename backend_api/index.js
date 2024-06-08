const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8081;

// Importações dos controladores
const post = require('./controllers/postController.js');
const comment = require('./controllers/commentController.js');

// Middlewares
app.use(helmet()); // Segurança básica
app.use(cors()); // CORS para autorizar requisições de diferentes origens
app.use(bodyParser.json()); // Parsing de JSON
app.use(morgan('combined')); // Log de requisições

// Rotas
app.use('/post', post);
app.use('/comment', comment);

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
