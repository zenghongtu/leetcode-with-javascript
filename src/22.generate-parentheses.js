/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  // 记录 left "(" 和 right ")" 的个数
  const gen = (left, right, res) => {
    // 都用完，加入结果中
    if (left === n && right === n) {
      return result.push(res);
    }

    // left 是小于 n 个
    if (left < n) {
      gen(left + 1, right, res + '(');
    }

    // right 小于n 个，并且这个时候 left 肯定是大于 right 个数的
    if (left > right && right < n) {
      gen(left, right + 1, res + ')');
    }
  };

  gen(0, 0, '');

  return result;
};
// @lc code=end
