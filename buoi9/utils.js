const fs = require('fs');

const readUsers = (file) => {
  const data = fs.readFileSync(file, 'utf8');
  let users = data.split('\n');
  users = users.map(user => {
    const userDetail = user.split('|');
    const obj = {
      id: +userDetail[0],
      name: userDetail[1],
      age: +userDetail[2],
      address: userDetail[3]
    }
    return obj;
  });
  return users;
}



module.exports = { readUsers }