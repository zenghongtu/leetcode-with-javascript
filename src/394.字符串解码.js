/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  /**
   * str 记录当前字符串片段
   * k 次数
   */
  let str = "",
    k = "";
  const stack = [];

  const isInt = (c) => !isNaN(c);

  for (const char of s) {
    if (isInt(char)) {
      k += char;
    } else if (char === "[") {
      // 将前面字符串放入栈中
      stack.push({ str, k });
      str = "";
      k = "";
    } else if (char === "]") {
      // 取出上一个帧中字符串 和 当前字符进行拼接
      const data = stack.pop();
      str = data.str + str.repeat(data.k);
    } else {
      str += char;
    }
  }

  return str;
};

// @lc code=end
