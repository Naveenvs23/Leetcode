/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
      let a=Math.sqrt(n);
  if (!Number.isInteger(a)) {
        return false;
    }
    if(a<2){
        return false
    }
    for (let i=2;i<= Math.sqrt(a);i++) {
        if (a%i===0) {
            return false;
        }
    }
    return true
};