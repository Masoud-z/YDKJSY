{
  let a = new String("ABC");
  console.log(a);

  let arr = Array(3);
  console.log(arr);

  console.log(new Date());
  console.log(new Date().getTime());
  console.log(Date.now());
  console.log(Date());

  const mySym = Symbol("Test Symbol!");
  console.log(mySym);

  let objectWithSymbol: any = {};
  objectWithSymbol[mySym] = "Test object with symbol!";
  objectWithSymbol.a = "Test object with symbol!";

  console.log(objectWithSymbol);
}
