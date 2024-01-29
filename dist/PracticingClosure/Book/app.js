"use strict";
(() => {
    function range(start, end) {
        if (end === undefined) {
            return function getEnd(end) {
                return getRange(start, end);
            };
        }
        else {
            return getRange(start, end);
        }
        function getRange(start, end) {
            var ret = [];
            for (let i = start; i <= end; i++) {
                ret.push(i);
            }
            return ret;
        }
    }
    range(3, 3);
    range(3, 8);
    range(3, 0);
    var start3 = range(3);
    var start4 = range(4);
    start3(3);
    start3(8);
    start3(0);
    start4(6);
})();
