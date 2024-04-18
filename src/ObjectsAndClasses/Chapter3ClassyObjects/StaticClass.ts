class Point2d {
  static origin = new Point2d(0, 0);
  static distance(point1: Point2d, point2: Point2d) {
    return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
  }
  constructor(public x: number, public y: number) {}
  toString() {
    return `${this.x},${this.y}`;
  }
}

console.log(`Starting point: ${Point2d.origin}`);
// Starting point: (0,0)
var next = new Point2d(3, 4);
console.log(`Next point: ${next}`);
// Next point: (3,4)
console.log(`Distance: ${Point2d.distance(Point2d.origin, next)}`);
// Distance: 5
