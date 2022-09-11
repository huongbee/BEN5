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

const writeUsers = (file, userObj) => {
  try {
    if (!userObj.id) return false;
    const user = {
      id: userObj.id,
      name: userObj.name || '',
      age: userObj.age || '',
      address: userObj.address || ''
    }
    // const userStr = userObj.id + '|' + userObj.name + '|' + userObj.age + '|' + userObj.address;
    const userStr = Object.values(user).join('|');
    fs.appendFileSync(file, '\n' + userStr, 'utf8');
    return true
  } catch (error) {
    console.log(error);
    return false;
  }
}


module.exports = { readUsers, writeUsers }