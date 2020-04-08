// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// Test.assertEquals(incrementString("foobar000"), "foobar001");
// Test.assertEquals(incrementString("foo"), "foo1");
// Test.assertEquals(incrementString("foobar001"), "foobar002");
// Test.assertEquals(incrementString("foobar99"), "foobar100");
// Test.assertEquals(incrementString("foobar099"), "foobar100");
// Test.assertEquals(incrementString(""), "1");

function incrementString(strng) {
  const stringArray = strng.split('');
  if (stringArray.length === 0) {
    return "1";
  };
  const returnNumberIndex = function (arr) {
    const numbers = "1234567890".split('');
    for (let i = 0; i < arr.length; i++) {
      for (let num of numbers) {
        if (arr[i] === num) {
          return i;
        };
      };
    };
  };
  const indexOfNum = returnNumberIndex(stringArray);
  const letters = stringArray.slice(0, indexOfNum).join('');
  if (indexOfNum === undefined) {
    return letters + "1";
  };
  let numberInString = parseFloat(stringArray.slice(indexOfNum).join(''));
  numberInString += 1;
  let numberStringified = numberInString.toString();
  if ((letters + numberStringified).length < strng.length) {
    do {
      numberStringified = "0" + numberStringified;
    } while ((letters + numberStringified).length < strng.length);
  };
  return letters + numberStringified;
};