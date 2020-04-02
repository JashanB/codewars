// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Test.describe("Example tests",_=>{
//   Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
//   Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
//   Test.assertEquals(high('take me to semynak'), 'semynak');  
//   });


function high(x){
  let score = 0;
  let result;
  const alphabet = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
  };
  const scoreObject = {};
  const fullArray = x.split(" ");
  for (let word of fullArray) {
    scoreObject[word] = 0;
    let singleWord = word.split('');
    for (let character of singleWord) {
      for (let alpha of Object.keys(alphabet)) {
        if (character === alpha) {
          scoreObject[word] += alphabet[alpha];
        }
      }
    }
  }
  for (let word of Object.keys(scoreObject)) {
    if (scoreObject[word] > score) {
      score = scoreObject[word];
      result = word;
    }
  }
  return result;
};