/**
 * @param {number} n
 * @return {number}
 */
 var totalMoney = function(n) {
    let total = 0;

    for (let i = 0; i < n; i++) {
        let week = Math.floor(i / 7);
        let day = i % 7;

        total += week + day + 1;
    }

    return total;
};
