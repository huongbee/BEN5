const axios = require('axios');

async function getTempC(location) {
  const url = 'https://api.weatherapi.com/v1/current.jsonq?key=b72b885b72f84ed681c42155220102&q=' + location;
  // try {
  //   const res = await axios.get(url);
  //   console.log(res.data.current.temp_c);
  // } catch (error) {
  //   console.log('Loi: ' + error.message);
  // }
  const res = await axios.get(url).catch(err => {
    return { error: true, message: 'Loi: ' + err.message }
  });
  console.log(res.error ? res.message : res?.data?.current?.temp_c);
}
getTempC('SaiGon');
