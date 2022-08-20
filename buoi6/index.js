// const jsonData = require('./data.json')
const fs = require('fs');
// fs.readFile('./users.txt', (err, data) => console.log(data.toString()));
function writeFile(path, data) {
  // fs.writeFileSync(path, data);
  fs.appendFileSync(path, "\n" + data);
  console.log('Done');
}
// const file = __dirname + '/../../../../' + '/Desktop/new.txt'; //'/Users/huonghuong/Desktop/new.txt';
// console.log(__filename);
const path = './data/'
const file = 'users.txt';

const arrUsers = [
  { name: 'Nguyen Van A' },
  { name: 'Nguyen Van B' }
];

if (fs.existsSync(path + file)) {
  const data = fs.readFileSync(path + file).toString();
  console.log(data);
  arrUsers.forEach(user => {
    writeFile(path + file, JSON.stringify(user))
  })
} else {
  console.log('File does not exist')
  // create file
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
  const data = JSON.stringify([{ name: 'BEN5' }])
  writeFile(path + file, data)
};
