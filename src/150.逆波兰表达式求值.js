/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // 坑：要用 parseInt 做处理
  const opts = {
    "*": (a, b) => a * b,
    "+": (a, b) => a + b,
    "/": (a, b) => parseInt(b / a, 10),
    "-": (a, b) => b - a,
  };
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const currToken = tokens[i];

    if (opts[currToken]) {
      const n1 = stack.pop();
      const n2 = stack.pop();

      stack.push(opts[currToken](n1, n2));
    } else {
      stack.push(parseInt(currToken, 10));
    }
  }

  return stack[0];
};
// @lc code=end
