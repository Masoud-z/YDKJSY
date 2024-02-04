(() => {
  function range(start: number, end?: number) {
    if (end === undefined) {
      return function getEnd(end: number) {
        return getRange(start, end);
      };
    } else {
      return getRange(start, end);
    }
    // **********************
    function getRange(start: number, end: number) {
      var ret = [];
      for (let i = start; i <= end; i++) {
        ret.push(i);
      }
      return ret;
    }
  }
  type func = (end: number) => number[];
  range(3, 3); // [3]
  range(3, 8); // [3,4,5,6,7,8]
  range(3, 0); // []
  var start3 = range(3) as func;
  var start4 = range(4) as func;
  start3(3); // [3]
  start3(8); // [3,4,5,6,7,8]
  start3(0); // []
  start4(6); // [4,5,6]
})();
