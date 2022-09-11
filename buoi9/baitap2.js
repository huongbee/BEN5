const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const { readUsers, writeUsers } = require('./utils.js');
app.use(bodyParser.json());
const filePath = './data/users.dat';




app.post('/users', (request, response) => {
  response.json({
    success: true,
    message: 'Success!',
    data: {
      users: readUsers(filePath)
    }
  });
})
app.post('/add', (request, response) => {
  try {
    const user = request.body;
    const result = writeUsers(filePath, user);
    return response.json({
      success: result,
      message: result ? 'Success!' : 'Error!'
    });
  } catch (error) {
    return response.json({
      success: false,
      message: error.message
    });
  }
});

app.put('/update/:id', (request, response) => {
  try {
    const id = +request.params.id;
    const userExisted = readUsers(filePath);
    const index = userExisted.findIndex(user => +user.id === id);
    if (index < 0) {
      return response.json({
        success: false,
        message: 'Can not find user id ' + id
      });
    }
    userExisted[index] = {
      id: userExisted[index].id, // not update
      name: request.body.name || userExisted[index].name,
      age: request.body.age || userExisted[index].age,
      address: request.body.address || userExisted[index].address
    };
    const users = userExisted.map(user => Object.values(user).join('|'));
    fs.writeFileSync(filePath, users.join('\n'));
    response.json({
      success: true,
      message: 'Success!'
    });
  } catch (error) {
    return response.json({
      success: false,
      message: error.message
    });
  }
});

app.delete('/delete/:id', (request, response) => {
  try {
    const id = +request.params.id;
    const userExisted = readUsers(filePath);
    const index = userExisted.findIndex(user => +user.id === id);
    if (index < 0) {
      return response.json({
        success: false,
        message: 'Can not find user id ' + id
      });
    }
    userExisted.splice(index, 1);
    const users = userExisted.map(user => Object.values(user).join('|'));
    fs.writeFileSync(filePath, users.join('\n'));
    response.json({
      success: true,
      message: 'Success!'
    });
  } catch (error) {
    return response.json({
      success: false,
      message: error.message
    });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));
