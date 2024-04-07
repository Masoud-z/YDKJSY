"use strict";
(() => {
    const testObj = {};
    const obj = {
        42: 42,
        true: "True",
        [testObj]: "[testObj]",
    };
    console.log("test");
    for (let keyName in obj) {
        console.log("keyName is:");
        console.log(keyName);
        console.log("================");
        console.log("type of keyName is:");
        console.log(typeof keyName);
        console.log("================");
        if (keyName === "42") {
            console.log("Is keyName equal to number 42 ? ");
            console.log(keyName === 42);
            console.log("================");
        }
        if (keyName === "true") {
            console.log("Is keyName equal to boolean true ? ");
            console.log(keyName === true);
            console.log("================");
        }
        console.log("----------------************----------------");
    }
    const anotherObj = {
        ["x" + 2 * 2]: "['x' + 2 * 2]",
    };
    for (let key in anotherObj) {
        console.log("keyName in computed property name is:");
        console.log(key);
        console.log("================");
        console.log("----------------************----------------");
    }
    const propsSymbol = Symbol("optional, developer-friendly description");
    const objWithSymbol = {
        [propsSymbol]: "[propsSymbol]",
    };
    console.log(objWithSymbol);
    console.log(objWithSymbol[propsSymbol]);
    for (let key in objWithSymbol) {
        console.log("keyName in symbol property name is:");
        console.log(key);
        console.log("================");
        console.log("----------------************----------------");
    }
    const myObj = { test: "test" };
    let test = {};
    const myObjCopy = structuredClone(myObj);
})();
