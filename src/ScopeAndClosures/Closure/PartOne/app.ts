const isPrime = (function isPrime() {
  const primes: Record<number, boolean> = {};
  return function isPrime(v: number) {
    if (v in primes) {
      return primes[v];
    }
    if (v <= 3) {
      return (primes[v] = v > 1);
    }
    if (v % 2 == 0 || v % 3 == 0) {
      return (primes[v] = false);
    }
    let vSqrt = Math.sqrt(v);
    for (let i = 5; i <= vSqrt; i += 6) {
      if (v % i == 0 || v % (i + 2) == 0) {
        return (primes[v] = false);
      }
    }
    return (primes[v] = true);
  };
})();

const factorize = (function factorize() {
  const factors: Record<number, number[]> = {};
  return function factorize(n: number): number[] {
    if (n in factors) {
      return factors[n];
    }
    if (!isPrime(n)) {
      for (let i = Math.floor(n / 2 + 1); i > 1; i--) {
        if (n % i === 0) {
          return [...factorize(i), ...factorize(n / i)];
        }
      }
    }

    return (factors[n] = [n]);
  };
})();

// function factorize(v: number): number[] {
//   if (!isPrime(v)) {
//     let i = Math.floor(Math.sqrt(v));
//     while (v % i != 0) {
//       i--;
//     }
//     return [...factorize(i), ...factorize(v / i)];
//   }
//   return [v];
// }

// console.log(isPrime(11)); // true
// console.log(isPrime(25)); // false
// console.log(factorize(11)); // [ 11 ]
// console.log(factorize(12)); // [ 3, 2, 2 ] --> 3*2*2=12
console.log(factorize(1073741824 * 27 * 125 * 49 * 11 * 13 * 17));
