/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapST = {};
    let mapTS = {};
    for (let i = 0; i < s.length; i++) {
        let ch1 = s[i];
        let ch2 = t[i];
        if (mapST[ch1] && mapST[ch1] !== ch2) {
            return false;
        }
        if (mapTS[ch2] && mapTS[ch2] !== ch1) {
            return false;
        }
        mapST[ch1] = ch2;
        mapTS[ch2] = ch1;
    }
    return true;
};