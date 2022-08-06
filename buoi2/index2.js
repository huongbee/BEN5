/**
cho n = 1 -> 100;
Viết 1 function để thực hiện các việc sau:
- In dãy số chẳn
- In dãy số lẻ
- In dãy số chia 6 dư 5: 5,11,17,23,29
- In dãy số chia 6 dư 4: 4,10,16,22,....
- In dãy số chính phương
*/

const isSoChan = (num) => {
  if (num % 2 === 0) return true;
  return false;
};
// const isSoChan = (num) => num % 2 === 0 ? true : false;
// const isSoLe = (num) => num % 2 === 1 ? true : false;
// const isChia6Du5 = (num) => num % 6 === 5 ? true : false;
// const isChia6Du4 = (num) => num % 6 === 4 ? true : false;
// const isSoChinhPhuong = (num) => parseInt(Math.sqrt(num)) === Math.sqrt(num) ? true : false;

const inSo = (fn) => {
  let kq = '';
  for (let i = 1; i <= 100; i++) {
    if (fn(i)) kq += ' ' + i;
  }
  return kq;
}
// console.log(inSo(isChia6Du4));
console.log(inSo((num) => num % 2 === 1));
console.log(inSo((num) => num % 2 === 0 ? true : false));
