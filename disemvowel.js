/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    assert.strictEqual(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    assert.strictEqual(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    })
  })
*/

function disemvowel(str) {
    let splitArray = str.split("");
    let newArray = [];
    for (let i = 0; i < splitArray.length; i++) {
        if (splitArray[i].toLowerCase() !== "a" && splitArray[i].toLowerCase() !== "e" && splitArray[i].toLowerCase() !== "i" && splitArray[i].toLowerCase() !== "o" && splitArray[i].toLowerCase() !== "u") {
            newArray.push(splitArray[i]);
        }
    }
    return newArray.join('');
  }