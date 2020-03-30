// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// Test.assertEquals(squareDigits(9119), 811181);

function squareDigits(num){
  //may the code be with you
  const string = num.toString();
  const stringArray = string.split('');
  const result = [];
  for (let number of stringArray) {
    const num = Number(number);
    result.push(num * num);
    console.log(result)
  }
  const numString = result.join('');
  return Number(numString);
}