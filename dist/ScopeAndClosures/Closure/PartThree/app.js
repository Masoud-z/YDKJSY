"use strict";
function calculator1() {
    let currentResult = 0;
    let lastEntrance = undefined;
    return function calculate(entrance) {
        if (typeof entrance === "number") {
            if (typeof lastEntrance !== "string") {
                lastEntrance = entrance;
                return (currentResult = entrance);
            }
            else {
                if (currentResult === "Error")
                    return currentResult;
                switch (lastEntrance) {
                    case "=":
                        return currentResult;
                    case "*":
                        currentResult = currentResult * entrance;
                        lastEntrance = entrance;
                        return currentResult;
                    case "+":
                        currentResult = currentResult + entrance;
                        lastEntrance = entrance;
                        return currentResult;
                    case "-":
                        currentResult = currentResult - entrance;
                        lastEntrance = entrance;
                        return currentResult;
                    case "/":
                        currentResult = currentResult / entrance;
                        lastEntrance = entrance;
                        return currentResult;
                    default:
                        throw new Error("Unhandled entrance");
                }
            }
        }
        else if (entrance === "=") {
            return currentResult;
        }
        else {
            if (currentResult === "Error") {
                return (currentResult = "Error");
            }
            else {
                return (lastEntrance = entrance);
            }
        }
    };
}
const calc1 = calculator1();
console.log(calc1(4));
console.log(calc1("+"));
console.log(calc1(7));
console.log(calc1(3));
console.log(calc1("-"));
console.log(calc1(2));
console.log(calc1("="));
console.log(calc1("*"));
console.log(calc1(4));
console.log(calc1("="));
console.log(calc1(5));
console.log(calc1("-"));
console.log(calc1(5));
console.log(calc1("="));
