/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
     let mi=Math.min(...nums);
    let ma=Math.max(...nums);
    while (ma%mi!==0) {
        let re=ma%mi;
        ma=mi;
        mi=re;
    }
    return mi;
};