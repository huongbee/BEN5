const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const { readUsers } = require('./utils.js');
app.use(bodyParser.json());


app.post('/users', (request, response) => {
  response.json({
    success: true,
    message: 'Success!',
    data: {
      users: readUsers('./data/users.dat')
    }
  });
})

app.listen(3000, () => console.log('Server listening on port 3000'));
