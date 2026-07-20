/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function (grid) {
    const n = grid.length;
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
    const queue = [];
    let head = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                dist[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    while (head < queue.length) {
        const [x, y] = queue[head++];
        for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;
            if (
                nx >= 0 &&
                ny >= 0 &&
                nx < n &&
                ny < n &&
                dist[nx][ny] === Infinity
            ) {
                dist[nx][ny] = dist[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    function can(limit) {
        if (dist[0][0] < limit) return false;
        const visited = Array.from({ length: n }, () => Array(n).fill(false));
        const q = [[0, 0]];
        let idx = 0;
        visited[0][0] = true;
        while (idx < q.length) {
            const [x, y] = q[idx++];
            if (x === n - 1 && y === n - 1)
                return true;
            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;
                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < n &&
                    ny < n &&
                    !visited[nx][ny] &&
                    dist[nx][ny] >= limit
                ) {
                    visited[nx][ny] = true;
                    q.push([nx, ny]);
                }
            }
        }
        return false;
    }
    let low = 0;
    let high = 0;
    for (let row of dist)
        for (let d of row)
            high = Math.max(high, d);
    let ans = 0;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (can(mid)) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
};