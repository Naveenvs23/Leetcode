/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
      let digits = n.toString().split("");
    let max = 0;
    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            let product = Number(digits[i]) * Number(digits[j]);

            if (product > max) {
                max = product;
            }
        }
    }
    return max;   
};