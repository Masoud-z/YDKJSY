{
  let a = true;
  let b = false;
  let c = false;
  console.log((a && b) || c ? (c || b ? a : c && b) : a);
}
