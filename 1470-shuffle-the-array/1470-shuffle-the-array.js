/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let r=[];
    for(let i=0 ; i<n ; i++){
        r.push(nums[i]);
        r.push(nums[i+n])
    }
    
    return r;
};