{
  let a = true;
  let b = false;
  let c = false;
  console.log((a && b) || c ? (c || b ? a : c && b) : a);
}

{
  let a = 42;
  let b = "foo";
  let c = false;

  let d = (a && b) || c ? (c || b ? a : c && b) : a;
  console.log("d is: ", d);
}
