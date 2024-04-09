"use strict";
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
    function numerateObjectWithEntries(obj) {
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === "object") {
                console.log("-----------++++++++++-----------");
                console.log(key, " starts : ");
                numerateObjectWithEntries(value);
                console.log(key, " ends.");
                console.log("----------------------");
            }
            else {
                console.log(key, " : ", value);
            }
        }
    }
    function numerateObjectWithKeys(obj) {
        for (const key of Object.keys(obj)) {
            console.log(key);
        }
    }
    function numerateObjectWithValues(obj) {
        for (const value of Object.values(obj)) {
            if (typeof value === "object") {
                console.log("-----------++++++++++-----------");
                console.log(value, " starts : ");
                numerateObjectWithValues(value);
                console.log(value, " ends.");
                console.log("----------------------");
            }
            else {
                console.log(value);
            }
        }
    }
    function numerateObjectWithGetOwnPropertyNames(obj) {
        console.log(Object.getOwnPropertyNames(obj));
        for (const key of Object.getOwnPropertyNames(obj)) {
            console.log(key);
        }
    }
    function numerateObjectWithGetOwnPropertySymbols(obj) {
        console.log(Object.getOwnPropertySymbols(obj));
        for (const key of Object.getOwnPropertySymbols(obj)) {
            console.log(key);
        }
    }
    function numerateObjectWithin(obj) {
        for (const key in obj) {
            if (typeof obj[key] === "object") {
                console.log("-----------++++++++++-----------");
                console.log(key, " starts : ");
                numerateObjectWithin(obj[key]);
                console.log(key, " ends.");
                console.log("----------------------");
            }
            else {
                console.log(key, " : ", obj[key]);
            }
        }
    }
    numerateObjectWithin(obj);
})();
