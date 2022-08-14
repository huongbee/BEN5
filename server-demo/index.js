const app = require('express')();
const Calculate = require('./calculator');


app.get('/', (req, res) => {
  return res.send('Hello');
})
app.get('/:pheptinh/:a/:b', (req, res) => {
  const a = +req.params.a;
  const b = +req.params.b;
  const pt = req.params.pheptinh;

  const cal = new Calculate(a, b, pt);
  return res.send({ a, b, pheptinh: cal.pheptinh, result: cal.result });
})
app.listen(3000, () => console.log('Server listening on port 3000'))