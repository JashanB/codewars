/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers) {
    let low = 0;
    let high = 0;
    let sorted = numbers.split(" ").sort((a, b) => {
        return parseFloat(a) - parseFloat(b);
    }
    )
    let string = sorted[sorted.length -1] + " " + sorted[0];
    return string
}

function highAndLow(numbers) {
    let array = numbers.split(" ");
    let low = parseFloat(array[0]);
    let high = parseFloat(array[0]);
    for (const value of array) {
        if (parseFloat(value) < low) {
            low = parseFloat(value);
        }
        if (parseFloat(value) > high) {
            high = parseFloat(value);
        }
    }
    let string = high + " " + low;
    return string
}