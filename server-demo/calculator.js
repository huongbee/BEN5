class Calculate {
  constructor(a, b, pt) {
    this.a = a;
    this.b = b;
    this.pt = pt;
  }
  get pheptinh() {
    if (this.pt == 'cong') return '+';
    if (this.pt == 'tru') return '-';
    if (this.pt == 'nhan') return '*';
    if (this.pt == 'chia') return '/';
    if (this.pt == 'chiadu') return '%';
  }
  get result() {
    const str = `${this.a}${this.pheptinh}${this.b}`;
    return eval(str)
  }
}
module.exports = Calculate;