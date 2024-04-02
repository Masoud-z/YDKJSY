"use strict";
const factorial = (() => {
    const cache = {};
    return function factorialCalculator(n) {
        if (n === 1)
            return 1;
        if (`${n}` in cache) {
            return cache[`${n}`];
        }
        return (cache[`${n}`] = n * factorialCalculator(n - 1));
    };
})();
console.log(factorial(6));
if (true) {
    function ask() {
        console.log("Am I called? (if (true))");
    }
    ask();
}
if (true) {
    function ask() {
        console.log("Or what about me? (second if (true))");
    }
}
for (let i = 0; i < 5; i++) {
    function ask() {
        console.log("Or is it one of these? (for loop)");
    }
}
function ask() {
    console.log("Wait, maybe, it's this one? (Global)");
}
var keeps = [];
for (var i = 0; i < 3; i++) {
    keeps[i] = () => i;
}
console.log(keeps[0]());
console.log(keeps[1]());
console.log(keeps[2]());
