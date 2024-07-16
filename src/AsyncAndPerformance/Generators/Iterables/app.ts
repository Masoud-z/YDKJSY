{
  let a = [1, 3, 5];
  let it = a[Symbol.iterator]();
  console.log("it: ", it);

  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
  console.log(it.next());
}
