/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    let a= nums.slice().reverse();
    return nums.concat(a);
    
};