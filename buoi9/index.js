const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Hello world!');
})
app.post('/', (request, response) => {
  response.json({
    success: true,
    message: 'Hello world!'
  });
})
app.post('/hello', (request, response) => {
  console.log(request.body);
  response.json({
    success: true,
    message: 'Success!',
    data: {
      headers: request.headers,
      body: request.body
    }
  });
})

app.get('/page-:number/:key', (request, response) => {
  response.send({
    success: true,
    message: 'Success!',
    data: {
      pageNumber: +request.params.number,
      key: request.params.key,
      allParams: request.params // get all parameters
    }
  });
})

app.get('/auth', (request, response) => {
  response.send({
    success: true,
    message: 'Success!',
    data: {
      allQueryData: request.query
    }
  });
})
app.listen(3000, () => console.log('Server listening on port 3000'));