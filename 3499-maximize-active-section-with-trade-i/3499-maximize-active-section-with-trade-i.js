/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    const t = "1" + s + "1";
    let groups = [];
    let i = 0;
    while (i < t.length) {
        let j = i;
        while (j < t.length && t[j] === t[i]) {
            j++;
        }
        groups.push({
            ch: t[i],
            len: j - i
        });
        i = j;
    }
    let ones = 0;
    for (let ch of s) {
        if (ch === '1') ones++;
    }
    let ans = ones;
    for (let i = 1; i < groups.length - 1; i++) {
        if (
            groups[i].ch === '1' &&
            groups[i - 1].ch === '0' &&
            groups[i + 1].ch === '0'
        ) {
            ans = Math.max(
                ans,
                ones + groups[i - 1].len + groups[i + 1].len
            );
        }
    }
    return ans;
};