/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 1 || x === 0) {
    return x;
  }

  let l = 1;
  let r = x;

  let res;

  while (l <= r) {
    // 只考虑整数
    const m = Math.floor((l + r) / 2);

    // 防止 m*m 数值越界
    if (m === x / m) {
      return m;
    } else if (m > x / m) {
      r = m - 1;
    } else {
      l = m + 1;
      // 存一下值，下次循环可能进不来
      res = m;
    }
  }

  return res;
};

var mySqrt1 = function (x) {
  if (x === 1 || x === 0) {
    return x;
  }
  let l = 0;
  let r = x;

  while (1) {
    const mid = (l + r) / 2;

    const curr = mid * mid;

    if (Math.abs(curr - x) < 0.01) {
      return Math.floor(mid);
    } else if (x < curr) {
      r = mid;
    } else {
      l = mid;
    }
  }
};
// @lc code=end
