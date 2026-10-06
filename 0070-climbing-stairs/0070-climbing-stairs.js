/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let oneStepBefore = 1;
    let twoStepsBefore = 1;
    for (let i = 2; i <= n; i++) {
        const current = oneStepBefore + twoStepsBefore;
        twoStepsBefore = oneStepBefore;
        oneStepBefore = current;
    }
    return oneStepBefore;
};