"use strict";
class Test {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    logger() {
        console.log(this.x);
    }
}
const newTest = new Test(1, 2);
newTest.x;
