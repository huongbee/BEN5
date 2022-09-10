const express = require('express');
const bodyParser = require('body-parser');
const users = require('./data/users.json');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());


app.post('/users', (request, response) => {
  response.json({
    success: true,
    message: 'Success!',
    data: { users }
  });
})

app.post('/add', (request, response) => {
  const user = request.body;
  users.push(user);
  fs.writeFileSync('./data/users.json', JSON.stringify(users));
  response.json({
    success: true,
    message: 'Success!'
  });
})

app.post('/update/:id', (request, response) => {
  const id = +request.params.id;
  const index = users.findIndex(user => user.id === id);
  if (index < 0) {
    return response.json({
      success: false,
      message: 'Can not find user id ' + id
    });
  }
  users[index] = {
    id: users[index].id, // not update
    name: request.body.name || users[index].name,
    age: request.body.age || users[index].age,
    address: request.body.address || users[index].address
  };
  fs.writeFileSync('./data/users.json', JSON.stringify(users));
  response.json({
    success: true,
    message: 'Success!'
  });
})

app.post('/delete/:id', (request, response) => {
  const id = +request.params.id;
  const index = users.findIndex(user => user.id === id);
  if (index < 0) {
    return response.json({
      success: false,
      message: 'Can not find user id ' + id
    });
  }
  users.splice(index, 1);
  fs.writeFileSync('./data/users.json', JSON.stringify(users));
  response.json({
    success: true,
    message: 'Success!'
  });
})
app.listen(3000, () => console.log('Server listening on port 3000'));











/*
Cho file users.json
Dựng server thực hiện các APIs sau:
- Đọc data từ file users.json
- Thêm 1 user vào file users.json. Kiểm tra id tồn tại
- Cập nhật 1 user trong file users.json với id truyền từ route
- Xóa user trong file users.json với id truyền từ route

Cấu trúc data response:
{
  "success": true,
  "message": "Success!",
  "data": {
      "users": [
        {
          "id": 1,
          "name": "Nguyen Van A",
          "age": "22",
          "address": "District 3, HCM"
        }
      ]
  }
}
*/
