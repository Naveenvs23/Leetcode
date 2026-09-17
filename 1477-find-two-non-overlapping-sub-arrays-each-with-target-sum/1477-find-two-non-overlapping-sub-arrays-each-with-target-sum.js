/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    const n = arr.length;
    const best = new Array(n + 1).fill(Infinity);
    let left = 0;
    let sum = 0;
    let answer = Infinity;
    for (let right = 0; right < n; right++) {
        sum += arr[right];
        while (sum > target) {
            sum -= arr[left];
            left++;
        }
        best[right + 1] = best[right];
        if (sum === target) {
            const length = right - left + 1;
            if (best[left] !== Infinity) {
                answer = Math.min(
                    answer,
                    best[left] + length
                );
            }
            best[right + 1] = Math.min(
                best[right + 1],
                length
            );
        }
    }
    return answer === Infinity ? -1 : answer;
};