function calculatorModule() {
  type Operators = "+" | "-" | "*" | "/" | "=";
  type Entrance = number | Operators;

  const calculator = () => {
    let currentResult: number | "Error" = 0;
    let lastEntrance: Entrance | undefined;

    return (entrance: Entrance) => {
      if (typeof entrance === "number") {
        if (
          typeof lastEntrance === "number" ||
          lastEntrance === undefined ||
          lastEntrance === "=" ||
          currentResult === "Error"
        ) {
          currentResult = entrance;
          lastEntrance = entrance;
          return currentResult;
        } else {
          switch (lastEntrance) {
            case "+":
              currentResult = currentResult + entrance;
              break;
            case "-":
              currentResult = currentResult - entrance;
              break;
            case "*":
              currentResult = currentResult * entrance;
              break;
            case "/":
              currentResult = currentResult / entrance;
              break;

            default:
              currentResult = "Error";
              break;
          }
          lastEntrance = entrance;
          if (currentResult === Infinity) currentResult = "Error";
          return currentResult;
        }
      } else {
        lastEntrance = entrance;
        return currentResult;
      }
    };
  };
  const calc = calculator();
  return {
    number: (n: number) => calc(n),
    plus: () => calc("+"),
    minus: () => calc("-"),
    mult: () => calc("*"),
    div: () => calc("/"),
    eq: () => calc("="),
  };
}

export default calculatorModule;
