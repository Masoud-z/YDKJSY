{
  function* something(): Generator<number, string, unknown> {
    try {
      let nextVal;
      while (true) {
        if (nextVal === undefined) {
          nextVal = 1;
        } else {
          nextVal = 3 * nextVal + 6;
        }
        yield nextVal;
      }
    } finally {
      // cleanup clause
      console.log("cleaning up!");
    }
  }

  let it = something();
  for (let v of it) {
    console.log(v);
    // don't let the loop run forever!
    if (v > 500) {
      console.log(
        // complete the generator's iterator
        it.return("Hello World").value
      );
      console.log(it.next());
      // no `break` needed here
    }
  }
  // 1 9 33 105 321 969
  // cleaning up!
  // Hello World
}
