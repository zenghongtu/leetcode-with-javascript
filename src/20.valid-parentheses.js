/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (const c of s.split('')) {
    // 如果是 map 中的 key
    if (map[c]) {
      // 就加入栈中
      stack.push(c);
      // 否则判断栈顶 key 对应的值是否相等
    } else if (map[stack.pop()] !== c) {
      return false;
    }
  }

  return stack.length === 0;
};

// 复杂度较高，思路不错。
var isValid0 = function (s) {
  let len = 0;

  while (len !== s.length) {
    len = s.length;
    // 不断剔除完整的
    s = s.replace(/\{\}/g, '').replace(/\(\)/g, '').replace(/\[\]/g, '');
  }

  return s.length === 0;
};
// @lc code=end
