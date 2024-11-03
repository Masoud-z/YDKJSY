{
  let something = (function () {
    let nextVal: number;
    return {
      [Symbol.iterator]: function () {
        return this;
      },
      next: function () {
        if (nextVal === undefined) {
          nextVal = 1;
        } else {
          nextVal = 3 * nextVal + 6;
        }
        return { value: nextVal, done: nextVal > 1000 };
      },
    };
  })();

  for (const value of something) {
    console.log(value);
  }
}
