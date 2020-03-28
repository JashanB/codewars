function alphabetPosition(text) {
  const resultArray = []
  const textArray = text.split("")
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
  "z": 26
  }
  
  for (let character of textArray) {
  const lowerCase = character.toLowerCase()
    for (let key of Object.keys(alphabet)) {
      if (lowerCase === key) {
        const thing = alphabet[key]
        resultArray.push(thing.toString())
        resultArray.push(" ")
      }
    }
  }
  const resultSliced = resultArray.slice(0, resultArray.length - 1)
  return resultSliced.join("")
}


Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");