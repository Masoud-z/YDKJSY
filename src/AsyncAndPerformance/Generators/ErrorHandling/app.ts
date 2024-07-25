{
  function* main(): Generator<string, void, string> {
    let x = yield "Hello World";
    yield x.toLowerCase(); // cause an exception!
  }
  let it = main();
  it.next().value; // Hello World
  try {
    //@ts-expect-error
    it.next(42);
  } catch (err) {
    console.log("catch");
    console.error(err); // TypeError
  }
}

//test-change

// {
//   function* main(): Generator<string> {
//     let x = yield "Hello World";
//     // never gets here
//     console.log(x);
//   }
//   let it = main();
//   it.next();
//   try {
//     // will `*main()` handle this error? we'll see!
//     it.throw("Oops");
//   } catch (err) {
//     // nope, didn't handle it!
//     console.error("catch"); // Oops
//     console.error(err); // Oops
//   }
// }
