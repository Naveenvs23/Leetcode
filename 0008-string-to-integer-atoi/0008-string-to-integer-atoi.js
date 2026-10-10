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
    while (i < s.length && s[i] === " ") {
        i++;
    }


    if (s[i] === "-") {
        sign = -1;
        i++;
    } else if (s[i] === "+") {
        i++;
    }

    while (i < s.length) {
        const digit = s.charCodeAt(i) - 48;
        if (digit < 0 || digit > 9) {
            break;
        }

        result = result * 10 + digit;
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