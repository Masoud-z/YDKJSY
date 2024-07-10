{
  function* foo(x: number): Generator<string, number, number> {
    let y = x * (yield "Hello"); // <-- yield a value!
    return y;
  }
  let it = foo(6);
  let res = it.next(); // first `next()`, don't pass anything
  console.log(res);
  res.value; // "Hello"

  res = it.next(7); // pass `7` to waiting `yield`
  console.log(res);
  res.value;
}
