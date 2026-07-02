/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let r=[]
    for(let i of nums){
        if(i%2 === 0){
            r.push(0)
        }
        else{
            r.push(1)
        }
    }
    r.sort((a, b) => a - b);
    return r
};