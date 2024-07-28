{
  function* foo() {
    console.log("`*foo()` starting");
    yield 3;
    yield 4;
    console.log("`*foo()` finished");
  }
  function* bar() {
    yield 1;
    yield 2;
    yield* foo(); // `yield`-delegation!
    yield 5;
  }

  function* arr() {
    yield 1;
    yield 2;
    yield* [3, 4, "a"]; // `yield`-delegation!
    yield 5;
  }

  let it = arr();
  console.log(it.next().value);
  console.log(it.next().value);

  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);

  console.log(it.next().value);
}
