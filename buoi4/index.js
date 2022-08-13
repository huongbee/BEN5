/*

Bai 1:
Cho O(0,0) và A(5,6)
Tính khoảng cách O->A;
  y
6 |A''(0,6)     A(5,6)
  |
  |
  |
  |
  |____________________ x
  O            A'=(5,0)

*/
class Point {
  /**
   *
   * @param {int} toadoX
   * @param {int} toadoY
   */
  constructor(toadoX, toadoY) {
    this.x = toadoX;
    this.y = toadoY;
  }

  /**
   *
   * @param {Point} pointA
   * @param {Point} pointB
   * @returns integer
   */
  static getDistance(pointA, pointB) {
    const dx = pointA.x - pointB.x;
    const dy = pointA.y - pointB.y;
    const d = Math.sqrt(Math.pow(dx, 2) + dy * dy);
    return d;
  }
}

// const O = new Point(0, 0);
// const A = new Point(3, 4);
// const OA = Point.getDistance(O, A);
// console.log(OA);
module.exports = Point;