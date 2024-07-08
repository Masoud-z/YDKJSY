import TestString from "../../../app";
// {
//   function getY(x: number) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(3 * x - 1);
//       }, 100);
//     });
//   }
//   function foo(bar: number, baz: number) {
//     let x = bar * baz;
//     return getY(x).then(function (y) {
//       // wrap both values into container
//       return [x, y];
//     });
//   }

//   foo(10, 20).then(function (msgs) {
//     let x = msgs[0];
//     let y = msgs[1];
//     console.log(x, y); // 200 599
//   });
// }

// {
//   function getY(x: number) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(3 * x - 1);
//       }, 100);
//     });
//   }

//   function foo(bar: number, baz: number) {
//     var x = bar * baz;
//     // return both promises
//     return [x, getY(x)];
//   }

//   Promise.all(foo(10, 20)).then(function (msgs) {
//     var x = msgs[0];
//     var y = msgs[1];
//     console.log(x, y);
//   });
// }

// {
//   function getY(x: number): Promise<number> {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(3 * x - 1);
//       }, 100);
//     });
//   }

//   function foo(bar: number, baz: number) {
//     var x = bar * baz;
//     // return both promises
//     return [x, getY(x)];
//   }

//   function spread(fn: (x: number, y: number) => void) {
//     return Function.apply.bind(fn, null);
//   }

//   Promise.all(foo(10, 20)).then(
//     spread(function (x, y) {
//       console.log(x, y); // 200 599
//     })
//   );
// }

// {
//   function getY(x: number): Promise<number> {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(3 * x - 1);
//       }, 100);
//     });
//   }

//   function foo(bar: number, baz: number) {
//     var x = bar * baz;
//     // return both promises
//     return [x, getY(x)];
//   }

//   Promise.all(foo(10, 20)).then(
//     Function.apply.bind(function (x, y) {
//       console.log(x, y); // 200 599
//     }, null)
//   );
// }

// {
//   function getY(x: number): Promise<number> {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve(3 * x - 1);
//       }, 100);
//     });
//   }

//   function foo(bar: number, baz: number) {
//     var x = bar * baz;
//     // return both promises
//     return [x, getY(x)];
//   }

//   Promise.all(foo(10, 20)).then(function (msgs) {
//     var [x, y] = msgs;
//     console.log(x, y); // 200 599
//   });
// }

console.log(TestString);
{
  function getY(x: number): Promise<number> {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(3 * x - 1);
      }, 100);
    });
  }

  function foo(bar: number, baz: number) {
    var x = bar * baz;
    // return both promises
    return [x, getY(x)];
  }

  Promise.all(foo(10, 20)).then(function ([x, y]) {
    console.log(x, y); // 200 599
  });
}

declare global {
  interface PromiseConstructor {
    wrap: (fn: Function) => () => Promise<unknown>;
  }
}

Promise.wrap = function (fn) {
  return function () {
    var args: Array<(err: any, v: any) => void> = [].slice.call(arguments);
    return new Promise(function (resolve, reject) {
      fn.apply(
        null,
        args.concat((err, v) => {
          if (err) {
            reject(err);
          } else {
            resolve(v);
          }
        })
      );
    });
  };
};
