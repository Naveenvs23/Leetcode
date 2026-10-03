/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        const position = i + 1;
        const normalValue = s.charCodeAt(i) - 96;
        const reverseValue = 27 - normalValue;
        answer += reverseValue * position;
    }
    return answer;
};