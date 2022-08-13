/**
Bai 2;
Cho A(5,6) B(1,1) C(8,16)
Tính chu vi tam giác ABC = sum(AB+BC+AC)

 */

const Point = require('./index.js');

class Triangle {
  /**
   *
   * @param {Point} pointA
   * @param {Point} pointB
   * @param {Point} pointC
   */
  constructor(pointA, pointB, pointC) {
    this.pointA = pointA;
    this.pointB = pointB;
    this.pointC = pointC;
  }
  /**
   *
   * @returns int
   */
  get perimeter() {
    const AB = Point.getDistance(this.pointA, this.pointB);
    const BC = Point.getDistance(this.pointB, this.pointC);
    const AC = Point.getDistance(this.pointA, this.pointC);
    return AB + BC + AC;
  }
}

const A = new Point(5, 6);
const B = new Point(1, 1);
const C = new Point(8, 16);

// const AB = Point.getDistance(A, B);
// const AC = Point.getDistance(A, C);
// const BC = Point.getDistance(B, C);
// console.log(AB + BC + AC);

const ABC = new Triangle(A, B, C);
console.log(ABC.perimeter);
