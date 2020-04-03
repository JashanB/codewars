// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// describe("Solution", function() {
//   it("should test for something", function() {
//     // Test.assertEquals(1 + 1, 2);
//     // assert.strictEqual(1 + 1, 2);
//   });
// });


function anagrams(word, words) {
  const resultArray = [];
  const wordArray = word.split('');
  const wordObject = {};
  for (let character of wordArray) {
    if (wordObject[character]) {
      wordObject[character] += 1;
    } else {
      wordObject[character] = 1;
    }
  }
  for (let w0rd of words) {
    const queryObject = {};
    for (let character of w0rd) {
      if (queryObject[character]) {
        queryObject[character] += 1;
      } else {
        queryObject[character] = 1;
      }
    }
    const sortedKeysWord = JSON.stringify(Object.keys(wordObject).sort());
    const sortedValuesWord = JSON.stringify(Object.values(wordObject).sort());
    const sortedKeysQuery = JSON.stringify(Object.keys(queryObject).sort());
    const sortedValuesQuery = JSON.stringify(Object.values(queryObject).sort());
    if (sortedKeysWord === sortedKeysQuery && sortedValuesWord === sortedValuesQuery) {
      resultArray.push(w0rd);
    }
  }
  return resultArray;
};