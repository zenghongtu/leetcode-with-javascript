/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return n
    .toString(2)
    .split('')
    .filter((i) => i === '1').length;
};

var hammingWeight1 = function (n) {
  let ret = 0;

  while (n > 0) {
    ret += n & 1;

    // 无符号右移一位
    n = n >>> 1;
  }

  return ret;
};
// @lc code=end
