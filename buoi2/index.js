// const fn = (name) => 'Hello ' + name;
// console.log(fn('Ben5'));

/**
 *
 * @param {function} fn
 * @param {string} name
 * @returns string
 */
// const log = (fn, name) => fn(name);
// log(console.log, 'Ben5');


/**
 *
 * @param {function (a,b) } fn
 * @returns
 */
const cal = (fn) => {
  const a = 12;
  const b = 20;
  return fn(a, b);
}

const fnTong = (a, b) => {
  return a + b;
}

const fnHieu = (a, b) => {
  return a - b;
}
const tong = cal(fnTong); // 32
const hieu = cal(fnHieu);

const thuong = cal((a, b) => a / b);
const tich = cal((a, b) => a * b);
console.log(tong, hieu, thuong, tich);
