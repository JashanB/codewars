/*
Task
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.

Examples
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
Notes
"flick" will always be given in lowercase.
A list may contain multiple flicks.
Switch the boolean value on the same element as the flick itself.
*/

function flickSwitch(arr) {
    let value = true;
    const returnArr = [];
    arr.forEach(element => {
        if (element === 'flick') {
            value === true ? value = false : value = true;
        }
        returnArr.push(value);
    });

    return returnArr;
}