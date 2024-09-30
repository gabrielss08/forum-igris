require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models'); // Importa a configuração do banco de dados

const app = express();
const port = 3000;

// Importações dos controladores
const post = require('./controllers/postController.js');
const comment = require('./controllers/commentController.js');

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Autoriza o uso da API a partir de qualquer origem

// Rotas
app.use('/post', post);
app.use('/comment', comment);

// Sincroniza o banco de dados e inicia o servidor
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
  });
}).catch(err => {
  console.error('Não foi possível conectar ao banco de dados:', err);
});
