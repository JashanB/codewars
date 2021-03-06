// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

// Test.assertEquals(iqTest("2 4 7 8 10"),3);
// Test.assertEquals(iqTest("1 2 2"), 1);

function iqTest(numbers) {
  const stringArray = numbers.split(' ');
  const numArray = stringArray.filter(x => x !== " ")
  const ifEven = numArray.filter(x => x % 2 === 0);  
  if (ifEven.length === 1) {
    const warpArray = numArray.map(function(num, index) {
      if (num % 2 === 0) {
        return num
      } else {
        return "X"
      }
    })
    for (let i = 0; i < warpArray.length; i++) {
      if (ifEven[0] === warpArray[i]) {
        return i + 1;
      }
    }
  } else {
    const odd = numArray.filter(x => x % 2 !== 0);
    const warpArray = numArray.map(function(num, index) {
      if (num % 2 !== 0) {
        return num
      } else {
        return "X"
      }
    })
    for (let i = 0; i < warpArray.length; i++) {
      if (odd[0] === warpArray[i]) {
        return i + 1;
      }
    }
  }
}