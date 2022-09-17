const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/load-form', (request, response) => {
  response.render('my-form');
});

app.get('/post-form', (request, response) => {
  return response.send(request.query)
})
app.post('/post-form', (request, response) => {
  // return response.send(request.query)
  console.log(request.body);
  return response.send(request.body)
})
app.listen(3000, () => console.log('Server listening on port 3000'));


// GET: http://localhost:3000/post-form?txtEmail=hohoho123%40gmail.com&txtPassword=12345&chkRemember=on
// POST: http://localhost:3000/post-form