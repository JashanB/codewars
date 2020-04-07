// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

// describe( "maxSequence", function(){
//   it("should work on an empty array",function(){
//     Test.assertEquals(maxSequence([]), 0);
//   });
//   it("should work on the example",function(){
//     Test.assertEquals(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
//   });
// });

const maxSequence = function (arr) {
  let isAllNegative = true;
  let resultObj = {};
  //slice going both ways, start with full length array 
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 0) {
      isAllNegative = false;
    };
    let newArr = arr.slice(0, i);
    for (let z = 0; z < newArr.length; z++) {
      let word = i.toString() + z.toString();
      let doubleSliced = newArr.slice(z);
      console.log(doubleSliced)
      resultObj[word] = doubleSliced.reduce((a, b) => a + b, 0);
    };
  };
  const numberArray = Object.values(resultObj).sort((a, b) => a - b);
  if (isAllNegative === true || arr.length < 1) {
    return 0
  } else {
    return numberArray[numberArray.length - 1];
  };
};