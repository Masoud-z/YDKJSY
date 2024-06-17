{
  let a = {
    b: 42,
    c: "42",
    d: [1, 2, 3],
  };

  JSON.stringify(a, ["b", "c"]); // "{"b":42,"c":"42"}"

  JSON.stringify(a, (k, v) => {
    console.log("value her is: ", v);
    if (k !== "c") return v;
  });
  // "{"b":42,"d":[1,2,3]}"
}
