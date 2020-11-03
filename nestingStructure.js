Array.prototype.sameStructureAs = function (other) {

  //loop through array , assign a for i not being an array and 1 for being an array 
  //compare this where this = initial array to other which equals second array 
  let thisString = '';
  let compareString = '';
  const generateString = function(array, length) {
    for (let i of array) {
      if (isArray(i)) {
        let newLength = i.length;
        generateString(i, newLength);
      } else {
        return 'a' + length.toString();
      }
    }
  };
  if (isArray(this)) {
    thisString = generateString(this, this.length);
  };
  if (isArray(other)) {
    compareString = generateString(other, other.length);
  };
  if (thisString === compareString) {
    return true;
  };
};

// Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

// For example:

//  // should return true
// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

//  // should return false 
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
// For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.