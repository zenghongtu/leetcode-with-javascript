/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function (nums) {
  // 动态规划
  let dp = [];

  for (let i = 0, len = nums.length; i < len; i++) {
    if (i === 0) {
      dp[0] = nums[0];
    } else {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    }
  }

  return Math.max(...dp);
};

var maxSubArray = function (nums) {
  // 贪心
  let sum = 0;
  let ret = nums[0];

  for (const num of nums) {
    // 大于 0 就继续加下去
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    ret = Math.max(ret, sum);
  }

  return ret;
};
// @lc code=end
