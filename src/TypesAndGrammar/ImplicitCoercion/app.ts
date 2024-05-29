{
  function onlyOne(a: any, b: any, c: any) {
    return !!((a && !b && !c) || (!a && b && !c) || (!a && !b && c));
  }

  let a = 1;
  let b = null;
  console.log(onlyOne(a, b, b)); // true
  console.log(onlyOne(b, a, b)); // true
  console.log(onlyOne(a, b, a)); // false

  function onlyOneArgs(...args: any[]) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      if (args[i]) {
        sum += args[i];
      }
    }
    return sum == 1;
  }
  console.log(onlyOneArgs(null, false, 0, 1));
  console.log(onlyOneArgs(null, undefined, 0, true));
  console.log(onlyOneArgs(null, 1, true, false, 0));
}
