/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let len = nums.length,
    ret = Infinity;

  for (let i = 0; i < len; i++) {
    let l = i + 1,
      r = len - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      ret = Math.abs(sum - target) < Math.abs(ret - target) ? sum : ret;

      if (sum > target) {
        r--;
      } else if (sum < target) {
        l++;
      } else {
        return target;
      }
    }
  }

  return ret;
};
// @lc code=end
