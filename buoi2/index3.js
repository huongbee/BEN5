/**
cho biến n = 5;
viết 1 hàm in ra màn hình các hình sau:

o--------->
|
|
|

 *                x=1 y=1
 * *              x=2 y=1,2
 * * *            x=3 y=1,2,3
 * * * *          x=4 y=1,2,3,4
 * * * * *

 * * * * *   x=1 y=1,2,3,4,5
 * * * *     x=2 y=1,2,3,4
 * * *       x=3 y=1,2,3
 * *
 *

*/
const n = 5;
const hinh1 = (n) => {
  for (let x = 1; x <= 5; x++) {
    let starString = '';
    for (let y = 1; y <= 5; y++) {
      if (y <= x) {
        starString += '* ';
      } else {
        starString += '  ';
      }
    }
    console.log(starString);
  }
}
const hinh2 = (n) => {
  for (let x = 1; x <= 5; x++) {
    let starString = '';
    for (let y = 1; y <= 5; y++) {
      if (y <= n - x + 1) {  // || y<=x
        starString += '* ';
      } else {
        starString += '  ';
      }
    }
    console.log(starString);
  }
}
// hinh1(n);
// console.log('\n');
// hinh2(n);

/*

 *          x=1 y=1
 * *        x=2 y=1,2
 *   *      x=3 y=1,3
 *     *    x=4 y=1,4
 * * * * *  x=5 y=1,2,3,4,5 (ko phu thuoc y)
*/
const hinh3 = (n) => {
  for (let x = 1; x <= 5; x++) {
    let starString = '';
    for (let y = 1; y <= 5; y++) {
      if (y == 1 || x == y || x == 5) {
        starString += '* ';
      } else {
        starString += '  ';
      }
    }
    console.log(starString);
  }
}
// hinh3(n);

/*
 * * * * *   x=1 y=1,2,3,4,5 (ko phu thuoc y)
 *     *     x=2 y=1,4
 *   *       x=3 y=1,3
 * *         x=4 y=1,2
 *           x=5 y=1

 */

const hinh4 = (n) => {
  for (let x = 1; x <= 5; x++) {
    let starString = '';
    for (let y = 1; y <= 5; y++) {
      if (x == 1 || y == n - x + 1 || y == 1) {
        starString += '* ';
      } else {
        starString += '  ';
      }
    }
    console.log(starString);
  }
}
// hinh4(n);
const hinh5 = (n) => {
  for (let x = 1; x <= 5; x++) {
    let starString = '';
    for (let y = 1; y <= 5; y++) {
      if (y >= x) {
        starString += '* ';
      } else {
        starString += '  ';
      }
    }
    console.log(starString);
  }
}
/**

* * * * *
  * * * *
    * * *
      * *
        *
 */

const draw = (n, fn) => {
  let starString = '';
  for (let x = 1; x <= 5; x++) {
    for (let y = 1; y <= 5; y++) {
      if (fn(x, y, n)) {  // fn thực thi với 3 args
        starString += '* ';
      } else {
        starString += '  ';
      }
    }
    starString += '\n'
  }
  return starString;
}
const s = draw(n, (x, y) => y <= x) // ve hinh 1, với fn = (x, y) => y <= x
const s2 = draw(n, (x, y, n) => y <= n - x + 1) // ve hinh 2, với fn = (x, y, n) => y <= n - x + 1
const s4 = draw(n, (x, y, n) => x == 1 || y == n - x + 1 || y == 1)

console.log(s4);
