const request = require('request');

const cal = (a, b, pt, cb) => {
  const url = `http://localhost:3000/${pt}/${a}/${b}`;
  request.get(url, (error, response, body) => {
    if (error) return cb(error, null);
    const data = JSON.parse(body);
    return cb(null, data.result);
  });
}
// (3 + 4) * 5 / 2
const r = '';
cal(3, 4, 'cong', (error, result) => {
  if (error == null) {
    cal(result, 5, 'nhan', (err, tich) => {
      if (err == null) console.log(tich);
      cal(tich, 2, 'chia', (err, thuong) => {
        if (err == null) console.log(thuong);
      })
    })
  }
});

console.log(r);
