const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8081;

app.use(bodyParser.json());

app.listen(port);

const clientList = ['helloworld'];

app.get('/list', (req, res) => {
  res.send(clientList);
});

app.post('/task', (req, res) => {
  clientList.push(req.body.task);
  res.send(clientList);
});

