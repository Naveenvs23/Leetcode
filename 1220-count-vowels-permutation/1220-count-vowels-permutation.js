/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    
    const MOD = 1000000007;

    let a = 1;
    let e = 1;
    let i = 1;
    let o = 1;
    let u = 1;

    for (let k = 2; k <= n; k++) {

        let newA = (e + i + u) % MOD;
        let newE = (a + i) % MOD;
        let newI = (e + o) % MOD;
        let newO = i % MOD;
        let newU = (i + o) % MOD;

        a = newA;
        e = newE;
        i = newI;
        o = newO;
        u = newU;
    }

    return (a + e + i + o + u) % MOD;

    
};