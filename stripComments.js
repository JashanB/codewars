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

// function solution(input, markers) {
//   const indexOfMarkers = [];
//   const arrOfSlices = [];
//   let includesNewLine = false;
//   if (input.includes('\n')) {
//     includesNewLine = true;
//   };
//   const inputArray = input.split('');
//   for (let i = 0; i < inputArray.length; i++) {
//     for (let marker of markers) {
//       if (character === marker) {
//         indexOfMarkers.push(i);
//       };
//     };
//   };
//   arrOfSlices.push(inputArray.slice(0, indexOfMarkers[0]));
//   for (let i = 0; i < inputArray.length; i++) {
//     let firstPart = inputArray.slice(indexOfMarkers[0]).join('');
//     if (firstPart.includes('\n')) {

//     } 

// }

// function solution(input, markers) {
//   const indexOfMarkers = [];
//   let modifyInput = input;
//   let inputArray = modifyInput.split('');
//   console.log(inputArray)
//   for (marker of markers) {
//     do {
//       const firstIndex = inputArray.indexOf(marker);
//       let firstSlice = inputArray.slice(firstIndex).join('');
//       console.log('hi', firstSlice)
//       // arrOfSlices.push(inputArray.splice(firstIndex, (firstIndex - inputArray.indexOf('\n'))))
//       if (firstSlice.includes('\n')) {
//         console.log('yes')
//         if (inputArray[inputArray.indexOf('\n') - 1] === " ") {
//           inputArray.splice(firstIndex -1, ((inputArray.indexOf('\n') + 1) - firstIndex))
//         } else {
//           inputArray.splice(firstIndex, (inputArray.indexOf('\n') - firstIndex))
//         }
//       } else {
//         inputArray = inputArray.slice(0, firstIndex - 1)
//       }
//     } while (inputArray.includes(marker))
//   }
//   console.log(inputArray);
//   return inputArray.join('');
// };

function solution(input, markers) {
  const indexOfMarkers = [];
  let modifyInput = input;
  let inputArray = modifyInput.split('');
  console.log(inputArray)
  for (marker of markers) {
    do {
      const firstIndex = inputArray.indexOf(marker);
      let firstSlice = inputArray.slice(firstIndex).join('');
      console.log('hi', firstSlice)
      // arrOfSlices.push(inputArray.splice(firstIndex, (firstIndex - inputArray.indexOf('\n'))))
      if (firstSlice.includes('\n')) {
        console.log('yes')
        if (inputArray[inputArray[firstIndex] - 1] === " ") {
          inputArray.splice((firstIndex -1), ((inputArray.indexOf('\n') + 1) - firstIndex))
        } else {
          inputArray.splice(firstIndex, (inputArray.indexOf('\n') - firstIndex))
        }
      } else {
        inputArray = inputArray.slice(0, firstIndex - 1)
      }
    } while (inputArray.includes(marker))
  }
  console.log(inputArray);
  return inputArray.join('');
};