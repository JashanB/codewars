// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

// Test.assertEquals(primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)")

function primeFactors(n) {
  let number = n;
  let resultArray = [];
  let resultObject = {};
  let isDivisable = true;
  const returnFirstDivisor = function (num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return [num / i, i];
      };
    };
  };
  do {
    let newArray = returnFirstDivisor(number);
    if (newArray === undefined) {
      return `(${n})`;
    }
    resultArray = resultArray.map(function (array, index) {
      if (array[0] === number) {
        return [array[1]];
      } else {
        return array;
      }
    });
    resultArray.push(newArray);
    number = newArray[0];
  } while (returnFirstDivisor(number) !== undefined);
  for (let array of resultArray) {
    for (let i = 0; i < array.length; i++) {
      if (resultObject[array[i]]) {
        resultObject[array[i]][1] += 1;
      } else {
        resultObject[array[i]] = [array[i], 1]
      };
    };
  };
  const result = Object.values(resultObject).map(function(array) {
    if (array[1] > 1) {
      return `(${array[0]}**${array[1]})`;
    } else {
      return `(${array[0]})`;
    }
  });
  return result.join('');
};
