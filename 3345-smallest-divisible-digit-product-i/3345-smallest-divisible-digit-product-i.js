/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
     while (true) {
        if (digitProduct(n) % t === 0) {
            return n;
        }
        n++;
    }
};
function digitProduct(num) {
    let product = 1;
    while (num > 0) {
        product *= num % 10;
        num = Math.floor(num / 10);
    }

    return product;
};