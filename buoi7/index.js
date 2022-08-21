const request = require('request');

function calculator(a, b, pt) {
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
// async function call() {
//   // const a = 10;
//   const tong = await calculator(1, 2, 'cong'); // synchronous
//   console.log(tong);
//   // console.log(a);
// }
// call();

// (async () => {
//   const tong = await calculator(1, 2, 'cong'); // synchronous
//   const tich = calculator(tong.result, 2, 'nhan');
//   console.log(await tich);
//   // const thuong = await calculator(tich.result, 2, 'chia');
//   // console.log(thuong.result);
// })();
