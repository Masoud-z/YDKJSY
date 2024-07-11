{
  let a = 1;
  let b = 2;
  function* foo(): Generator<number | undefined, number, number> {
    a++;
    yield;
    b = b * a;
    a = (yield b) + 3;
    return a;
  }

  function* bar(): Generator<number | undefined, number, number> {
    b--;
    yield;
    a = (yield 8) + b;
    b = a * (yield 2);
    return 12;
  }
  function step(gen: () => Generator<number | undefined, number, number>) {
    let it = gen();
    let last: number | undefined;
    return function () {
      // whatever is `yield`ed out, just
      // send it right back in the next time!
      if (last) {
        last = it.next(last).value;
      } else {
        last = it.next().value;
      }
    };
  }

  let s1 = step(foo);
  let s2 = step(bar);
  // run `*foo()` completely first
  s1();
  s1();
  s1();
  // now run `*bar()`
  s2();
  s2();
  s2();
  s2();
  console.log(a, b);
}
