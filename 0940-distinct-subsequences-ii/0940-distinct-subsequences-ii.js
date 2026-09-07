/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function (s) {
  const MOD = 1_000_000_007;
  let total = 1; 
  const last = new Map();
  for (const ch of s) {
    const added = total;
    total = (total + added - (last.get(ch) || 0) + MOD) % MOD;
    last.set(ch, added);
  }
  return (total - 1 + MOD) % MOD; 
};