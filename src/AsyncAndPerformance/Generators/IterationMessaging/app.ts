{
  function* foo(x: number): Generator<number | undefined, number, number> {
    let y = x * (yield);
    return y;
  }
  let it = foo(6);

  // start `foo(..)`
  console.log(it.next());

  //   console.log(it.next(7));
  let res = it.next(7);
  console.log(res.value); // 42
}
