const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'templates'); // rename folder views to templates

app.get('/', (req, res) => {
  const username = 'admin';
  const users = [{ id: 1, name: 'Jonh' }, { id: 2, name: 'Baby' }];
  res.render('home', { username, users });
})

app.listen(3000, () => console.log('Server listening on port 3000'));


/**
Tạo 1 DB lưu thông tin Singer: id, name, avatar, link
dựng 1 server đọc ds singers từ DB
dùng view ejs
 */