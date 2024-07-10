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

  console.log();
  console.log("-----------++++++++++++-----------");
  console.log();
}


{
  let x = 1;

  function* fooTest(): Generator<undefined, void, undefined> {
    x++;

    console.log("yield: ", yield); // pause!
    console.log("x:", x);
  }
  function bar() {
    console.log("bar");
    x++;
  }

  let itTest = fooTest();
  // start `foo()` here!
  console.log(itTest.next());
  // x; // 2
  bar();
  // x; // 3
  console.log(itTest.next()); // x: 3
}
