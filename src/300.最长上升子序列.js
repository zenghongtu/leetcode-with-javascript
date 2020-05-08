/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length < 1) {
    return 0;
  }

  const dp = [];

  let i = 0;

  while (i < nums.length) {
    dp[i] = 1;

    let j = 0;

    const curr = nums[i];

    while (j < i) {
      // 只使用小于当前值的数
      if (curr > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
      j++;
    }

    i++;
  }

  return Math.max(...dp);
};
// @lc code=end
