// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.


// describe('permutations', function() {
//   it('examples from description', function() {
//     Test.assertSimilar(permutations('a'), ['a']);
//     Test.assertSimilar(permutations('ab').sort(), ['ab', 'ba'].sort());
//     Test.assertSimilar(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
//   });
// });

function permutations(string) {
  const stringArray = string.split('');
  const resultObject = {
  };
  for (let i = 0; i < stringArray.length; i++) {
    let thisString = "";
    thisString += stringArray[i];
    for (let z = (i + 1); z < stringArray.length; z++) {
      for (let x = 0; x < stringArray.length; x++) {

      }
    }
  }
}