const request = require('request');

const location = 'SaiGon';
const getTempC = (location) => {
  const url = 'https://api.weatherapi.com/v1/current.json?key=b72b885b72f84ed681c42155220102&q=' + location;
  return new Promise((resolve, reject) => {
    request.get(url, (error, response, body) => {
      if (error) return reject(error);
      const data = JSON.parse(body);
      return resolve(data.current.temp_c); // JSON.stringify(json)
    });
  })
}
getTempC(location)
  .then(result => console.log(`Nhiet do hien tai o ${location} la: ${result}`))
  .catch(err => 'Lỗi: ' + console.log(err.message));
