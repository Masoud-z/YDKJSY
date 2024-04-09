(() => {
  const obj = {
    prop1: {
      inProp: "1",
      propArr: ["1", 1, { inArrObj: { test: "1" } }],
      propsObj: { inObj: ["test"] },
    },
    prop2: "2",
    prop3: 3,
  };

  function numerateObjectWithEntries(obj: object) {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object") {
        console.log("-----------++++++++++-----------");
        console.log(key, " starts : ");
        numerateObjectWithEntries(value);
        console.log(key, " ends.");
        console.log("----------------------");
      } else {
        console.log(key, " : ", value);
      }
    }
  }

  function numerateObjectWithKeys(obj: object) {
    for (const key of Object.keys(obj)) {
      console.log(key);
    }
  }

  function numerateObjectWithValues(obj: object) {
    for (const value of Object.values(obj)) {
      if (typeof value === "object") {
        console.log("-----------++++++++++-----------");
        console.log(value, " starts : ");
        numerateObjectWithValues(value);
        console.log(value, " ends.");
        console.log("----------------------");
      } else {
        console.log(value);
      }
    }
  }

  function numerateObjectWithGetOwnPropertyNames(obj: object) {
    console.log(Object.getOwnPropertyNames(obj));
    for (const key of Object.getOwnPropertyNames(obj)) {
      console.log(key);
    }
  }

  function numerateObjectWithGetOwnPropertySymbols(obj: object) {
    console.log(Object.getOwnPropertySymbols(obj));
    for (const key of Object.getOwnPropertySymbols(obj)) {
      console.log(key);
    }
  }

  function numerateObjectWithin<TObject extends object>(obj: TObject) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        console.log("-----------++++++++++-----------");
        console.log(key, " starts : ");
        numerateObjectWithin(obj[key] as object);
        console.log(key, " ends.");
        console.log("----------------------");
      } else {
        console.log(key, " : ", obj[key]);
      }
    }
  }

  numerateObjectWithin(obj);
})();
