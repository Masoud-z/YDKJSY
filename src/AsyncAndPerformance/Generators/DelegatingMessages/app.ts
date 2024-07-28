{
  function* foo(): Generator<string, string, string | number> {
    console.log("inside `*foo()`:", yield "B");
    console.log("inside `*foo()`:", yield "C");
    return "D";
  }
  function* bar(): Generator<string, string, string | number> {
    console.log("inside `*bar()`:", yield "A");
    // `yield`-delegation!
    console.log("inside `*bar()`:", yield* foo());
    console.log("inside `*bar()`:", yield "E");
    return "F";
  }
  let it = bar();
  console.log("outside:", it.next().value);

  console.log("outside:", it.next(1).value);

  console.log("outside:", it.next(2).value);

  console.log("outside:", it.next(3).value);

  console.log("outside:", it.next(4).value);
}
