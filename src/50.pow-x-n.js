/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow1 = function (x, n) {
  return Math.pow(x, n);
};

var myPow = function (x, n) {
  if (!n) return 1;

  // 如果小于0，取倒数
  if (n < 0) return 1 / myPow(x, -n);

  // 如果是奇数，取一个 x 出来
  if (n % 2) {
    return x * myPow(x, n - 1);
  }

  // 如果是偶数，进行拆分
  return myPow(x * x, n / 2);
};
// @lc code=end
