interface Point {
  x: number | null;
  y: number | null;
  init: (x: number, y: number) => void;
  rotate: (angleRadians: number) => void;
  toString: () => string;
}
const point: Point = {
  x: null,
  y: null,
  init: function (x: number, y: number) {
    this.x = x;
    this.y = y;
  },
  rotate(angleRadians: number) {
    if (this.x && this.y) {
      var rotatedX =
        this.x * Math.cos(angleRadians) - this.y! * Math.sin(angleRadians);
      var rotatedY =
        this.x * Math.sin(angleRadians) + this.y! * Math.cos(angleRadians);
      this.x = rotatedX;
      this.y = rotatedY;
    }
  },
  toString() {
    return `(${this.x},${this.y})`;
  },
};

point.init(1, 2);

const anotherPoint = new point.init(5, 6);

console.log(point);
console.log(anotherPoint);
