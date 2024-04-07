"use strict";
(() => {
    const myObj = {
        favoriteNumber: 42,
        isDeveloper: true,
        firstName: "Kyle",
    };
    console.log(Object.entries(myObj));
    const myObjShallowCopy = Object.fromEntries(Object.entries(myObj));
    console.log(myObjShallowCopy);
})();
