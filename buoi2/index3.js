/**
cho biến n = 5;
viết 1 hàm in ra màn hình các hình sau:

o--------->
|
|
|

 *                y=1 x=1
 * *              y=2 x=1,2
 * * *            y=3 x=1,2,3
 * * * *          y=4 x=1,2,3,4
 * * * * *

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
hinh1(n);
console.log('\n');
hinh2(n);






/*
 * * * * *
 * * * *
 * * *
 * *
 *

 *
 * *
 *   *
 *     *
 * * * * *

 * * * * *
 *     *
 *   *
 * *
 *

 */