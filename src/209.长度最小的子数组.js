/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  if (nums.length < 1) return 0;

  let ret = Infinity;

  let l = 0;
  let r = 0;

  let sum = 0;

  while (r < nums.length) {
    sum += nums[r];

    // 读题不仔细。。。
    // 找出该数组中满足其和 ≥ s 的长度最小的连续子数组
    while (sum >= s) {
      ret = Math.min(ret, r - l + 1);

      sum -= nums[l];
      l++;
    }

    r++;
  }

  return ret === Infinity ? 0 : ret;
};
// @lc code=end
