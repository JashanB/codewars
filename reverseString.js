function solution(str){
  if (str.length === 0) { return '' };
  const splitStr = str.split('');
  const newArr = [];
  for (let i = splitStr.length -1; i >= 0; i--) {
    newArr.push(splitStr[i]);
  }
  return newArr.join('');
}


// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

// Test.assertEquals(solution('world'), 'dlrow')
// Test.assertEquals(solution('hello'), 'olleh')
// Test.assertEquals(solution(''), '')
// Test.assertEquals(solution('h'), 'h')