"use strict";
(() => {
    function range(start, end) {
        function getRange(start, end) {
            let arr = [];
            for (let i = start; i <= end; i++) {
                arr.push(i);
            }
            return arr;
        }
        if (end === undefined) {
            return function getEnd(end) {
                return getRange(start, end);
            };
        }
        else {
            return getRange(start, end);
        }
    }
    let start3 = range(3);
    let start4 = range(4);
    console.log(range(3, 3));
    console.log(range(3, 8));
    console.log(range(3, 0));
    console.log(start3(3));
    console.log(start3(8));
    console.log(start3(0));
    console.log(start4(6));
})();
