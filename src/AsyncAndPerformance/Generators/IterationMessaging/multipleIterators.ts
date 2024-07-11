function* foo(): Generator<number, number, number> {
  let x = yield 2;
  z++;
  let y = yield x * z;
  console.log(x, y, z);
  return x;
}

let z = 1;

let it1 = foo();
let it2 = foo();

let val1 = it1.next().value; // 2 <-- yield 2
let val2 = it2.next().value; // 2 <-- yield 2

val1 = it1.next(val2 * 10).value; // 40 <-- x:20, z:2
val2 = it2.next(val1 * 5).value; // 600 <-- x:200, z:3

it1.next(val2 / 2); // y:300          // 20 300 3
it2.next(val1 / 4); // y:10            // 200 10 3
