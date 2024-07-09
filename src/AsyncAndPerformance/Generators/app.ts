// {
//   let x = 1;

//   function foo() {
//     x++;
//     bar(); // <-- what about this line?
//     console.log("foo");
//     console.log("x:", x);
//   }

//   function bar() {
//     console.log("bar");
//     x++;
//   }

//   foo();
// }

let x = 1;

function* foo() {
  x++;
  yield; // pause!
  console.log("x:", x);
}
function bar() {
  console.log("bar");
  x++;
}

let it = foo();
// start `foo()` here!
console.log(it.next());
// x; // 2
bar();
// x; // 3
console.log(it.next()); // x: 3
