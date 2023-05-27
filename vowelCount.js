/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});
*/
function getCount(str) {
    let counter = 0;
    for (const character of str.split("")) {
        if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
            counter += 1;
        }
    }
    return counter;
  } 