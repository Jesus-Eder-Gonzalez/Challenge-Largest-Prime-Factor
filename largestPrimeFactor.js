'use strict';
exports.largestPrimeFactor = function (n) {
  let primeNumber;
  let searchSet = parseInt(Math.pow(n, (.5)));
  let factorArray = [];

  if (n > 2) {
    primeNumber = 3;
    factorArray = [3];

  } else {
    primeNumber = 1;
  }

  for (let i = primeNumber; i < searchSet; i += 2) {

    if (n % i === 0) {
      if (!factorArray.some(number => i % number === 0)) {
        factorArray.push(i);
        primeNumber = i;
      }
    }



  }

  return primeNumber;
};