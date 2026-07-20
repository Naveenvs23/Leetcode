/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    let total = m * n;
    k = k % total;
    let result = Array.from({ length: m }, () => Array(n));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let currentIndex = i * n + j;
            let newIndex = (currentIndex + k) % total;
            let newRow = Math.floor(newIndex / n);
            let newCol = newIndex % n;
            result[newRow][newCol] = grid[i][j];
        }
    }
    return result;
};