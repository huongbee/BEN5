const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('./libs/DBConnect');
const UserController = require('./controllers/User.controller');

app.use('/', UserController)

app.listen(3000, () => console.log('Server listening on port 3000'))