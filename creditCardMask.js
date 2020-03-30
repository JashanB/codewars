// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// describe("maskify", function(){
//   it("should work for some examples", function(){
//     Test.assertEquals(maskify('4556364607935616'), '############5616');
//     Test.assertEquals(maskify('1'), '1');
//     Test.assertEquals(maskify('11111'), '#1111');
//   });
// });

function maskify(cc) {
  const stringArray = cc.split("");
  const arrayLength = stringArray.length;
  if (stringArray.length > 4) {
    const mappedArray = stringArray.map(function(character, index) {
      if (index < arrayLength - 4) {
        return "#";
      } else {
        return character;
      }
    })
    return mappedArray.join('');
  } else {
    return cc;
  }
}
