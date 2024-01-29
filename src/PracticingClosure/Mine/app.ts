(() => {
  function range(start: number, end?: number) {
    function getRange(start: number, end: number) {
      let arr = [];
      for (let i = start; i <= end; i++) {
        arr.push(i);
      }
      return arr;
    }

    if (end === undefined) {
      return function getEnd(end: number) {
        return getRange(start, end);
      };
    } else {
      return getRange(start, end);
    }
  }
  type func = (end: number) => number[];
  let start3 = range(3) as func;
  let start4 = range(4) as func;
  console.log(range(3, 3)); // [3]
  console.log(range(3, 8)); // [3,4,5,6,7,8]
  console.log(range(3, 0)); // []
  console.log(start3(3)); // [3]
  console.log(start3(8)); // [3,4,5,6,7,8]
  console.log(start3(0)); // []
  console.log(start4(6)); // [4,5,6]
})();
