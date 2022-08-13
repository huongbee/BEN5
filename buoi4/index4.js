// const data = require('./index3.js');
// const name = data.catName;
// const ben5 = data.ben5;
// const title = data.txt;

const { ben5, ben6 = {}, txt } = require('./index3.js');
console.log(ben5, ben6, txt);
