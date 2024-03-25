"use strict";
function isPrime(n) {
    let divisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }
    }
    if (divisors.length === 2)
        return true;
    return false;
}
console.log(isPrime(11));
console.log(isPrime(12));
