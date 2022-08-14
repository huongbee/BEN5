const promise = new Promise((resolve, reject) => {
  setTimeout((error) => {
    if (1 == 1) return reject('Lỗi!');
    return resolve('hello world')
  }, 1000);
});
promise.then(result => {
  console.log(result);
  // return { name: 'BEN5' }
}).catch((err) => {
  console.log(err);
  throw new Error('Lỗi dòng 11');
})
  .catch(err => {
    console.log('Lý do: ' + err.message);
    return { error: 'Lỗi' }
  })
  .then(result => console.log(result));

// console.log('hello BEN5');
