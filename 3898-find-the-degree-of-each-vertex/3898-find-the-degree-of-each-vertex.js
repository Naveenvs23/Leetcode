/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let n = matrix.length;
    let ans = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                ans[i]++;
            }
        }
    }
    return ans;
};