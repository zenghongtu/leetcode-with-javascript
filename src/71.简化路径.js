/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  if (!path) {
    return path;
  }
  const arr = path.split("/");
  const stack = [];

  for (const p of arr) {
    if (p === "..") {
      stack.pop();
    } else if (p && p !== ".") {
      stack.push(p);
    }
  }
  return "/" + stack.join("/");
};
// @lc code=end
