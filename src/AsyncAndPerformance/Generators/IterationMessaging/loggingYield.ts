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
