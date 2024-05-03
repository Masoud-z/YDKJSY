globalThis.value = { result: "Sad face" };
function one() {
  function two() {
    var three = {
      value: { result: "Hmmm" },
      fn: () => {
        const four = () => this.value;
        return four.call({
          value: { result: "OK" },
        });
      },
    };
    return three.fn();
  }
  return two();
}
console.log(new one());
