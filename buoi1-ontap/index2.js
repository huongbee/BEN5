// function getData(name) {
//   return { name } // {name: name}
// }


// const data = getData();
// console.log(data);


// const getData = (name) => {
//   return { name }
// }

// const getData = (name) => { return { name } };
// const getData = (name) => 'Hello, ' + name;
// const getData = (name) => `Hello, ${name}`;

// const data = getData('BEN-5');
// console.log(data);

const arr = [1, 2, 3, 5, 7, 13, 90, 6, 8, 9, 17];
// arr.forEach(function (item) {
//   console.log(item);
// });
// const fn = (val) => {
//   if (val % 2 == 0)
//     return val;
// }
const fn = (val) => val % 2 == 0 ? val : undefined;
const fillered = arr.filter(fn);
console.log(fillered);


// undefined: undefined
// null : obj
// empty : string
// 0
// false
// NaN

// arr.forEach((item, i) => console.log(i));
// const a = 9;
// console.log(Math.sqrt(a));
// function printItem(item) {
//   console.log(item);
// }
// function calc() {
//   arr.forEach(printItem);
// }

// calc();

// const soChinhPhuong = (num) => {
//   const sqrt = parseInt(Math.sqrt(num));
//   if (sqrt * sqrt === num) return true;
//   return false;
// }

// const soChinhPhuong = (num) => {
//   const sqrt = Math.sqrt(num); // 1.355666.
//   if (sqrt === parseInt(sqrt)) return true;
//   return false;
// }
// // console.log(soChinhPhuong(80));
// let result = 'Day so chinh phuong la: ';
// arr.forEach(function (item) {
//   if (soChinhPhuong(item)) {
//     result += item + ' '; // result = result + item;
//   }
// });
// arr.forEach(item => {
//   if (soChinhPhuong(item)) {
//     result += item + ' '; // result = result + item;
//   }
// });
// console.log(result);

// let n = 100; in ra day so chinh phuong tư 1->n
// let n = 100; in ra day so nguyên tố tư 1->n
