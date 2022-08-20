/*
b1: cd server-demo
b2: node index.js // run server
b3: http://localhost:3000/nhan/5/6
b4: làm bt

*/
// (3 + 4) * 5 / 2
const request = require('request');

function cal(a, b, pt) {
  return new Promise((resolve, reject) => {
    const url = `http://localhost:3000/${pt}/${a}/${b}`;
    request.get(url, (error, response, body) => {
      if (error) return reject(error); // http error
      if (body.startsWith('<!DOCTYPE html>')) // data error
        return reject(new Error('Data error!'));
      const data = JSON.parse(body);
      return resolve(data)
    })
  })
}

// const response = 0;
try {
  cal(3, 4, 'cong')
    .then(response => cal(response.result, 5, 'nhan'))
    .then(response => cal(response.result, 2, 'chia'))
    .then(response => console.log(response.result))
    .catch(err => {
      console.log('loi: ' + err.message);
      return false;
    }) // reject
    .catch(err => console.log(err))
    .then(result => console.log(result))
} catch (error) { // throw
  console.log("Loi: " + error.message);
}