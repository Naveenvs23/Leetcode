/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    const count = new Array(26).fill(0);
    for (let ch of s) {
        count[ch.charCodeAt(0) - 97]++;
    }
    let left = "";
    let middle = "";
    for (let i = 0; i < 26; i++) {
        left += String.fromCharCode(i + 97).repeat(Math.floor(count[i] / 2));
        if (count[i] % 2 === 1) {
            middle = String.fromCharCode(i + 97);
        }
    }
    return left + middle + [...left].reverse().join("");
};
