/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Step 1: Skip leading spaces
    while (i < s.length && s[i] === " ") {
        i++;
    }

    // Step 2: Check the sign
    if (s[i] === "-") {
        sign = -1;
        i++;
    } else if (s[i] === "+") {
        i++;
    }

    // Step 3: Read digits
    while (i < s.length) {
        const digit = s.charCodeAt(i) - 48;

        // Stop if the character is not a digit
        if (digit < 0 || digit > 9) {
            break;
        }

        result = result * 10 + digit;

        // Step 4: Handle overflow
        if (sign * result >= INT_MAX) {
            return INT_MAX;
        }

        if (sign * result <= INT_MIN) {
            return INT_MIN;
        }

        i++;
    }

    return sign * result;
};