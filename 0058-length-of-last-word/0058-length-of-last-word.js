/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let a=s.trim().split(" ")
  let last = a[a.length-1]
  let num=last.split("").length
  return num
};
