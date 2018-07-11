'use strict';
exports.largestPrimeFactor = function (n) {
  let primeNumber;
  let factorArray = [];

  if (n > 2) {
    primeNumber = 3;
    factorArray = [3];

  } else {
    primeNumber = 1;
  }

  for (let i = primeNumber; i <= n; i += 2) {

    if (n % i === 0) {
      if (!factorArray.some(number => i % number === 0)) {
        factorArray.push(i);
        primeNumber = i;
      }

    }

  }

  return primeNumber;
};