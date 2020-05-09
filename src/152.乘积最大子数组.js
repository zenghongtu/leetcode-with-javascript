/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 存在负负得正的情况，需要每次记录一下最小值
  let max = -Infinity,
    imax = 1,
    imin = 1;

  for (let i = 0; i < nums.length; i++) {
    // 如果当前值小于0，交换最大值与最小值
    if (nums[i] < 0) {
      [imax, imin] = [imin, imax];
    }

    imax = Math.max(imax * nums[i], nums[i]);
    imin = Math.min(imin * nums[i], nums[i]);

    // 上一个最大值与当前最大值中选最大值
    max = Math.max(imax, max);
  }
  return max;
};
// @lc code=end
