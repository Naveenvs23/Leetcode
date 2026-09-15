/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {

    const n = s.length
    const pal = Array.from(
        { length: n },
        () => new Uint8Array(n)
    );
    for (let start = n - 1; start >= 0; start--) {
        for (let end = start; end < n; end++) {

            if (
                s[start] === s[end] &&
                (
                    end - start <= 1 ||
                    pal[start + 1][end - 1]
                )
            ) {
                pal[start][end] = 1;
            }
        }
    }
    const dp = new Int32Array(n + 1);
    for (let end = 0; end < n; end++) {
        dp[end + 1] = dp[end];
        for (let start = 0; start <= end; start++) {
            const length = end - start + 1;
            if (length >= k && pal[start][end]) {
                dp[end + 1] = Math.max(
                    dp[end + 1],
                    dp[start] + 1
                );
            }
        }
    }
    return dp[n];  
};