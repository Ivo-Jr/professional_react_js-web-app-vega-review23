const express = require('express');
const bodyParser = require('body-parser');
// eslint-disable-next-line no-unused-vars
const axios = require('axios');
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { username, password } = req.body;

  // Aqui você deve verificar as credenciais de login no banco de dados.
  // Por exemplo, usando Mongoose para MongoDB, Sequelize para MySQL ou PostgreSQL, etc.

  // Se as credenciais forem válidas, responda com um status 200 e um objeto JSON com os detalhes necessários.
  // Caso contrário, responda com um status 401 (Não autorizado) ou 400 (Requisição inválida), dependendo do caso.
});

app.post('/auth', async (req, res) => {
  // eslint-disable-next-line no-unused-vars
  const { username, password } = req.body;

  // Faça uma requisição POST para a URL de login do site 'on.fiap.com.br' aqui
  // e passe as credenciais fornecidas.

  // Se a autenticação for bem-sucedida, armazene os cookies de sessão e retorne um
  // objeto JSON com os detalhes necessários.
  
  // Caso contrário, responda com um status 401 (Não autorizado) ou 400 (Requisição inválida),
  // dependendo do caso.
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
