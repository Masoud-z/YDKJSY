type Operators = "+" | "-" | "*" | "/" | "=";
type Entrance = number | Operators;

function calculator() {
  let currentResult: number | "Error" = 0;
  let lastEntrance: Entrance | undefined = undefined;

  return function calculate(entrance: Entrance) {
    if (typeof entrance === "number") {
      if (typeof lastEntrance !== "string") {
        lastEntrance = entrance;
        return (currentResult = entrance);
      } else {
        if (currentResult === "Error") return currentResult;
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
    } else if (entrance === "=") {
      return currentResult;
    } else {
      if (currentResult === "Error") {
        return (currentResult = "Error");
      } else {
        return (lastEntrance = entrance);
      }
    }
  };
}
const calc = calculator();

console.log(calc(4));
console.log(calc("+"));
console.log(calc(7));
console.log(calc(3));
console.log(calc("-"));
console.log(calc(2));
console.log(calc("="));
console.log(calc("*"));
console.log(calc(4));
console.log(calc("="));
console.log(calc(5));
console.log(calc("-"));
console.log(calc(5));
console.log(calc("="));
