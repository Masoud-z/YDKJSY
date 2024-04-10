"use strict";
(() => {
    const myObj = {
        testNumber: 42,
        testString: "test",
        testObject: { testInnerObject: "testInnerObjectText" },
        testArr: [12, "testInnerArrText"],
    };
    function getOwnPropertyDescriptors(obj) {
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
    function definedProperty(obj) {
        Object.defineProperty(obj, "definedProperty", {
            value: { testDefiningProperty: { test: "test" } },
            writable: true,
            enumerable: true,
            configurable: true,
        });
        console.log(obj);
    }
    function definedProperties(obj) {
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
    function defineGetterSetterProperty(obj) {
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
    defineGetterSetterProperty(myObj);
})();
