// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

// function checkComments(input, markers, expected) {
//   var actual;
//   actual = solution(input, markers);
//   return Test.expect(actual === expected, "Returned '" + actual + "' but expected '" + expected + "'");
// };

// checkComments("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges")
// checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne")

function solution(input, markers) {
  let inputArray = input.split('');
  for (marker of markers) {
    do {
      const firstIndex = inputArray.indexOf(marker);
      let firstSlice = inputArray.slice(firstIndex).join('');
      if (firstSlice.includes('\n')) {
        inputArray.splice((firstIndex), (inputArray.indexOf('\n') - firstIndex));
      } else {
        inputArray = inputArray.slice(0, firstIndex - 1);
      }
    } while (inputArray.includes(marker));
  }
  const minusSpace = inputArray.filter(function(x, index) {
    if ( inputArray[index + 1] === "\n" && x === ' ') {
    } else {
      return x;
    };
  });
  return minusSpace.join('').trim();
};