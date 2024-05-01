"use strict";
var point = {
    x: null,
    y: null,
    init(x, y) {
        this.x = x;
        this.y = y;
    },
    rotate(angleRadians) {
        if (this.x && this.y) {
            var rotatedX = this.x * Math.cos(angleRadians) - this.y * Math.sin(angleRadians);
            var rotatedY = this.x * Math.sin(angleRadians) + this.y * Math.cos(angleRadians);
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
