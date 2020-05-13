/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1,
    max = -Infinity;

  while (l < r) {
    max = Math.max((r - l) * Math.min(height[l], height[r]), max);

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return max;
};
// @lc code=end
