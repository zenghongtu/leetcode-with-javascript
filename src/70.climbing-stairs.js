/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs1 = function (n) {
  let prev = 0;
  let cur = 1;

  // 实际为fib
  let i = 0;
  while (i < n) {
    [prev, cur] = [cur, cur + prev];

    i++;
  }

  return cur;
};

let cache = {};

var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }

  while (!cache[n]) {
    // 走1步的数+走2步的数
    cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }

  return cache[n];
};

// @lc code=end
