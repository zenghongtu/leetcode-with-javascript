/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 用个 map，轻松搞定
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (map[target - curr] !== undefined) {
      return [map[target - curr], i];
    }
    map[curr] = i;
  }
  return null;
};
// @lc code=end
