/**
 * Created by zenghongtu on 26/11/2018.
 * Desc: https://leetcode.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // 预设对应值
  const chars = {'(': ')', '{': '}', '[': ']'};
  // 栈, 用来存储值, 如果匹配到就出栈
  const stack = [];
  let len = s.length, i = -1;
  // 如果长度为1,直接返回 false
  if (len === 1) return false;
  // 循环处理 入参s 中的字符
  while (++i < len) {
    const _s = s[i];
    // 如果当前值在 chars 中存在
    if (_s in chars) {
      // 存入栈中
      stack.push(_s)
    } else {
      // 否则判断是否与栈中最上面的值匹配
      if (chars[stack.pop()] !== _s) {
        // 不匹配返回 false
        return false
      }
    }
  }
  // 最后看栈中是否清空,清空就返回 true,否则返回 false
  return stack.length === 0;
};


const input = "()";
const result = isValid(input);

if (result === true) {
  console.log('\x1b[32mSuccess');
} else {
  console.log(result);
}
