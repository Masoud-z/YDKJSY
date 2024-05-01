interface Point {
  x: number | null;
  y: number | null;
  init: (x: number, y: number) => void;
  rotate: (angleRadians: number) => void;
  toString: () => string;
}
var point: Point = {
  x: null,
  y: null,
  init(x: number, y: number) {
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

const init = point.init;

init(1, 2);
