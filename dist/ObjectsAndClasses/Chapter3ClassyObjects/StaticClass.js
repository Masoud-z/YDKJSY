"use strict";
class Point2d {
    x;
    y;
    static origin = new Point2d(0, 0);
    static distance(point1, point2) {
        return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `${this.x},${this.y}`;
    }
}
console.log(`Starting point: ${Point2d.origin}`);
var next = new Point2d(3, 4);
console.log(`Next point: ${next}`);
console.log(`Distance: ${Point2d.distance(Point2d.origin, next)}`);
