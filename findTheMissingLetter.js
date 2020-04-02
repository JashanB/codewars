// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)
function findMissingLetter(array) {
  let result = '';
  let isCapital = true;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split('');
  if (array[0] === array[0].toLowerCase()) {
    isCapital = false;
  }
  const lower = array.map(x => x.toLowerCase());
  const startIndex = alphabetArray.indexOf(lower[0]);
  const endIndex = alphabetArray.indexOf(lower[lower.length - 1]);
  const slicedAlphabet = alphabetArray.slice(startIndex, endIndex);
  for (let character of slicedAlphabet) {
    let indexed = lower.indexOf(character);
    if (indexed === -1) {
      result = character;
    }
  }
  if (isCapital) {
    return result.toUpperCase();
  } else {
    return result;
  }
};