"use strict";
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
