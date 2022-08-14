const request = require('request');

const location = 'SaiGon';
const url = 'https://api.weatherapi.com/v1/current.json?key=b72b885b72f84ed681c42155220102&q=' + location;

request.get(url, (error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body);
  console.log(data.current.temp_c); // JSON.stringify(json)
});

const getTempC = (location) => {
  return 25;
}
const tempc = getTempC(location);
console.log(`Nhiet do hien tai o ${location} la: ${tempc}`);
