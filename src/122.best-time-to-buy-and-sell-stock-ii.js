/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const len = prices.length;
  let i = 0;

  let result = 0;
  while (i < len - 1) {
    if (prices[i] < prices[i + 1]) {
      result += prices[i + 1] - prices[i];
    }

    i++;
  }
  return result;
};
// @lc code=end
