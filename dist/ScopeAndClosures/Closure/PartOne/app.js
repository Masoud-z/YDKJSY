"use strict";
const isPrime = (function isPrime() {
    const primes = {};
    return function isPrime(v) {
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
    const factors = {};
    return function factorize(n) {
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
console.log(factorize(1073741824 * 27 * 125 * 49 * 11 * 13 * 17));
