// function useCalc(
//   calc: (key: "+" | "-" | "*" | "/" | "=" | `${number}`) => string,
//   keys: string
// ) {
//   return [...keys].reduce(function showDisplay(display, key) {
//     var ret = String(calc(key as "+" | "-" | "*" | "/" | "=" | `${number}`));
//     return display + (ret != "" && key == "=" ? "=" : "") + ret;
//   }, "");
// }

// function formatTotal(display: number | string) {
//   if (Number.isFinite(display)) {
//     // constrain display to max 11 chars
//     let maxDigits = 11;
//     // reserve space for "e+" notation?
//     if (Math.abs(+display) > 99999999999) {
//       maxDigits -= 6;
//     }
//     // reserve space for "-"?
//     if (+display < 0) {
//       maxDigits--;
//     }
//     // whole number?
//     if (Number.isInteger(display)) {
//       display = Number(display).toPrecision(maxDigits).replace(/\.0+$/, "");
//     }
//     // decimal
//     else {
//       // reserve space for "."
//       maxDigits--;
//       // reserve space for leading "0"?
//       if (Math.abs(+display) >= 0 && Math.abs(+display) < 1) {
//         maxDigits--;
//       }
//       display = Number(display).toPrecision(maxDigits).replace(/0+$/, "");
//     }
//   } else {
//     display = "ERR";
//   }
//   return display;
// }

// function calculator() {
//   var currentTotal = 0;
//   var currentVal = "";
//   var currentOper: "+" | "-" | "*" | "/" | "=" = "=";
//   return pressKey;
//   // ********************
//   function pressKey(key: "+" | "-" | "*" | "/" | "=" | `${number}`) {
//     // number key?
//     if (/\d/.test(key)) {
//       currentVal += key;
//       return key;
//     }
//     // operator key?
//     else if (/[+*/-]/.test(key)) {
//       // multiple operations in a series?
//       if (currentOper != "=" && currentVal != "") {
//         // implied '=' keypress
//         pressKey("=");
//       } else if (currentVal != "") {
//         currentTotal = Number(currentVal);
//       }
//       if (
//         key === "+" ||
//         key === "-" ||
//         key === "*" ||
//         key === "/" ||
//         key === "="
//       )
//         currentOper = key;
//       currentVal = "";
//       return key;
//     }
//     // = key?
//     else if (key == "=" && currentOper != "=") {
//       currentTotal = op(currentTotal, currentOper, Number(currentVal));
//       currentOper = "=";
//       currentVal = "";
//       return formatTotal(currentTotal);
//     }
//     return "";
//   }
//   function op(val1: number, oper: "+" | "-" | "*" | "/", val2: number) {
//     var ops = {
//       // NOTE: using arrow functions
//       // only for brevity in the book
//       "+": (v1: number, v2: number) => v1 + v2,
//       "-": (v1: number, v2: number) => v1 - v2,
//       "*": (v1: number, v2: number) => v1 * v2,
//       "/": (v1: number, v2: number) => v1 / v2,
//     };
//     return ops[oper](val1, val2);
//   }
// }

// var calc = calculator();

// useCalc(calc, "4+3="); // 4+3=7
// useCalc(calc, "+9="); // +9=16
// useCalc(calc, "*8="); // *5=128
