const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
require('./lib/DBConnect');
const ErrorController = require('./controllers/error.controller');
const SingerController = require('./controllers/Singer.controller');
const UserController = require('./controllers/User.controller');

app.use('/', SingerController); //
app.use('/user', UserController); // /user prefix  user/login , user/sign-up
app.use('/', ErrorController); //

app.listen(3000, () => console.log('Server listening on port 3000'));
