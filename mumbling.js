/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.


*/
function accum(s) {
    let answerString = "";
    let strSplit = s.split("");
    for (let i = 0; i < strSplit.length; i++) {
        let index = i;
        answerString += strSplit[i].toUpperCase();
        if (i > 0) {
            do {
                answerString += strSplit[i].toLowerCase();
                index -= 1;
            } while (index > 0);
        } 
        answerString += "-";

    }
    return answerString.slice(0, -1);
}
