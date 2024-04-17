(() => {
  const myObj = {
    testNumber: 42,
    testString: "test",
    testObject: { testInnerObject: "testInnerObjectText" },
    testArr: [12, "testInnerArrText"],
  };

  function getOwnPropertyDescriptors(obj: object) {
    console.log(Object.getOwnPropertyDescriptors(obj));
    console.log();
    console.log("*********************************************");
    console.log();

    for (const k in obj) {
      console.log();
      console.log("+++++++====+++++++");
      console.log(Object.getOwnPropertyDescriptor(obj, k));
      console.log("+++++++====+++++++");
      console.log();
    }
  }

  function definedProperty(obj: object) {
    Object.defineProperty(obj, "definedProperty", {
      value: { testDefiningProperty: { test: "test" } },
      writable: true,
      enumerable: true,
      configurable: true,
    });

    console.log(obj);
  }

  function definedProperties(obj: object) {
    Object.defineProperties(obj, {
      definedPropertyOne: {
        value: { testDefiningPropertiesOne: { test: "test" } },
        writable: true,
        enumerable: true,
        configurable: true,
      },
      SecondDefinedProperty: {
        value: "testSecond",
        configurable: true,
        writable: true,
        enumerable: true,
      },
    });

    console.log(obj);
  }

  function defineGetterSetterProperty(obj: any) {
    Object.defineProperty(obj, "TestGetterSetter", {
      get() {
        console.log("Get TestGetterSetter value");
        return 123;
      },
      set(prop) {
        console.log(`It just log the ${prop} and ignores assignment`);
      },
    });

    obj.TestGetterSetter;
    obj.TestGetterSetter = 42;
    obj.TestGetterSetter;
    console.log(obj.TestGetterSetter);
  }

  function testArr() {
    const newArr = [1, 2, 3, 4];
    newArr[7] = 8;
    console.log(newArr);
    console.log(newArr.length);
    newArr.map((item) => console.log(item));
  }

  function testObjCharacteristics() {
    const newObject = { test: 32 };
    Object.preventExtensions(newObject);
    newObject.test = 11;
    Object.seal(newObject);
    newObject.test = 0;
    // delete newObject.test; // => This will not work and will throw an error
    console.log(newObject.test);
    Object.freeze(newObject);
    newObject.test = 100;
    console.log(newObject.test);
  }

  testObjCharacteristics();

  const testObj = { a: 1 };
  const newCreateObject = Object.create(testObj);

  function test(){}
})();
