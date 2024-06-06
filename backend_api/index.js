const express = require('express');
const bodyParser = require('body-parser');
//protocolo de comunicacão entre apis e outros serviços cors
//CORS: autoriza para qualquer tipo de serviço (front-end, outras apis,
const cors = require('cors')
const app = express();
const port = 8081;
//importações

const post = require('./controllers/postController.js');
const comment = require('./controllers/commentController.js');
//Rotas
app.use(bodyParser.json());
//Função CORS para a autorização do uso da API
app.use(cors())
app.get('/', (req, res)=> res.send('Estou aqui'))
app.use('/post', post);
app.use('/comment', comment);
app.listen(port, () => console.log(`Servidor rodando porta ${port}!`))