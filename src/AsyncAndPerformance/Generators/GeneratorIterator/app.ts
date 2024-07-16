{
  function* something() {
    let nextVal;
    while (true) {
      if (nextVal === undefined) {
        nextVal = 1;
      } else {
        nextVal = 3 * nextVal + 6;
      }
      yield nextVal;
    }
  }

  const it = something();
  console.log("next: ", it.next());
  console.log("next: ", it.next());
  console.log("next: ", it.next());
  console.log("next: ", it.next());
  console.log("return: ", it.return());
  //   console.log("throw: ", it.throw("Test"));

  console.log();
  console.log("------------++++++------------");
  console.log();

  for (let v of something()) {
    console.log(v);

    // don't let the loop run forever!
    if (v > 500) {
      break;
    }
  }
  // 1 9 33 105 321 969

  console.log();
  console.log("------------++++++------------");
  console.log();

  console.log(something());
  let i = 0;
  for (let k in something()) {
    //It will not reach here
    console.log("k: ", k);
    i++;

    // don't let the loop run forever!
    if (i > 5) {
      break;
    }
  }
}
