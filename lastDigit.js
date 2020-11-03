function lastDigit(as){
  if (as.length < 1 || !Array.isArray(as)) {
    return 1;
  };
  if (as.length === 1) {
    return as[0];
  };
  let modArr = as;
  let result = 1;
  const powerOf = function(n1, n2) {
    let ans = 1;
    let of = n2
    do {
      ans = ans * n1
      of -= 1;
    } while (of > 0);
    return ans;
  };
  do {
    result = powerOf(modArr[modArr.length - 2], modArr[modArr.length - 1]);
    modArr = modArr.slice(0, modArr.length -2);
    modArr.push(result);
  } while(modArr.length > 1);
  result = result.toString().slice('')[result.length -1]
  return result;
};

// For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

// E. g.,

// lastDigit([3, 4, 2]) === 1
// because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

// Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers efficiently.

// Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.

// This kata generalizes Last digit of a large number; you may find useful to solve it 