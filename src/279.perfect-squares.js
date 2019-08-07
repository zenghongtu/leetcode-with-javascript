/*
 * @lc app=leetcode id=279 lang=javascript
 *
 * [279] Perfect Squares
 */
/**
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
  const dp = [0];

  // 从底层向上处理
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      // (i-j*j)获取和为i的另一半值，+1即当前的值
      dp[i] = Math.min(dp[i] || n, dp[i - j * j] + 1);
    }
  }

  return dp[n];
}

// 这题没做出来，还要多思考思考
