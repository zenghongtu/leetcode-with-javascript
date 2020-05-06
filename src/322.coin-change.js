/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange1 = function (coins, amount) {
  // DFS + 剪枝
  const cache = {};

  const dfs = (n) => {
    if (!cache[n]) {
      if (n === 0) return 0;
      if (n < 0) return -1;

      let ret = Infinity;
      for (const c of coins) {
        let r = dfs(n - c);
        if (r >= 0) {
          ret = Math.min(ret, 1 + r);
        }
      }
      cache[n] = ret === Infinity ? -1 : ret;
    }
    return cache[n];
  };

  return dfs(amount);
};

var coinChange = function (coins, amount) {
  const dp = [];

  let _amount = 0;

  // 从小硬币开始遍历
  while (_amount < amount + 1) {
    dp[_amount] = _amount === 0 ? 0 : Infinity;

    for (const coin of coins) {
      // 只有当前硬币小于 amount 才进行处理
      if (_amount >= coin) {
        dp[_amount] = Math.min(dp[_amount - coin] + 1, dp[_amount]);
      }
    }
    _amount++;
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end
