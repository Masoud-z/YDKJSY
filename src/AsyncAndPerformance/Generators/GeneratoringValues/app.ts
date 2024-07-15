let something = (function () {
  let nextVal: number;
  return {
    // needed for `for..of` loops
    [Symbol.iterator]: function () {
      return this;
    },
    // standard iterator interface method
    next: function () {
      if (nextVal === undefined) {
        nextVal = 1;
      } else {
        nextVal = 3 * nextVal + 6;
      }
      return { done: nextVal > 500 ? true : false, value: nextVal };
    },
  };
})();
// something.next().value; // 1
// something.next().value; // 9
// something.next().value; // 33
console.log("something: ", something);

let n = 0;
for (let v of something) {
  console.log(v);
}

console.log();
console.log("-------------+++++++-------------");
console.log();

const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

let theNumber = iterator.next();

console.log("iterator: ", iterator);
console.log(theNumber);
theNumber = iterator.next();
console.log(theNumber);
theNumber = iterator.next();
console.log(theNumber);
theNumber = iterator.next();
console.log(theNumber);
