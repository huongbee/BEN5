const express = require('express');
const app = express();
app.set('view engine', 'ejs');



app.get('/load-form', (request, response) => {
  response.render('my-form');
});


app.listen(3000, () => console.log('Server listening on port 3000'));