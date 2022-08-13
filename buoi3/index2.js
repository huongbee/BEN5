class Ben5 {
  #id;
  constructor(maSV = '-', tenSV = 'no name') {
    this.#id = maSV;
    this.name = tenSV;
  }
  getId() { return this.#id; }
  getName = () => this.name;
  // getter
  get hello() {
    return `Hello, ${this.name}`;
  }

  // setter
  set diaChi(add) { // fn
    ///
    return this.address = add;
  }
}
const b5 = new Ben5('1', 'NVA');
// console.log(b5.hello);
b5.diaChi = 'Quan 3'; // prop  diaChi
console.log(b5.address);


// console.log(b5.name);
// b5.name = 'Nguyen Van B';
// b5.age = 20;
// console.log(b5);

// console.log(b5.name);
// console.log(b5.getId());
// console.log(b5.getName());

// const Ben5 = {
//   id: 1,
//   name: 'Ben5',
//   getName: () => {
//     console.log(this);
//     return Ben5.name
//   }
// };
// Ben5.getId = () => Ben5.id;

// console.log(Ben5.getId());

// console.log(Ben5.getName());
/**
Bai 1:
Cho O(0,0) và A(5,6)
Tính khoảng cách O->A;
  y
6 |           A(5,6)
  |
  |
  |
  |
  |______________ x
  O            5


Bai 2;
Cho A(5,6) B(1,1) C(8,16)
Tính chu vi tam giác ABC = sum(AB+BC+AC)
 */

class Point {
  constructor(x, y) {
  }
}

const A = new Point(5, 6);
const O = new Point(0, 0);