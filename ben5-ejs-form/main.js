const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (request, response) => {
  response.render('home', { title: 'Home Page' });
});
app.get('/add', (request, response) => {
  response.render('add', { title: 'Add new Singer' });
});
app.get('/update', (request, response) => {
  response.render('update', { title: 'Update singer' });
});
app.listen(3000, () => console.log('Server listening on port 3000'));
