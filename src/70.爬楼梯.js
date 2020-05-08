/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = [, 1, 2];

  let i = 3;
  while (i <= n) {
    dp[i] = dp[i - 1] + dp[i - 2];

    i++;
  }

  return dp[n];
};
// @lc code=end
