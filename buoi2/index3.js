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

 * * * * *
 * * * *
 * * *
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
      }
    }
    console.log(starString);
  }
}
const hinh2 = (n) => {
  for (let x = 1; x <= 5; x++) {
    let starString = '';
    for (let y = 1; y <= 5; y++) {
      if (y >= x) {
        starString += '* ';
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
hinh3(n);

/*
 * * * * *
 *     *
 *   *
 * *
 *

 */