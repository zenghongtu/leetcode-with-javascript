/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map(),
    max = 0;

  // i 无重复子串开始下标，j 为当前遍历下标
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      // 如果出现重复，就取 上一次重复位置+1 和 当前 i 下标中最大值（即最右边位置下标）
      i = Math.max(map.get(s[j]) + 1, i);
    }

    // 取当前最大，和j-i（距离）+1
    max = Math.max(max, j - i + 1);

    // 更新当前对应字符的下标
    map.set(s[j], j);
  }

  return max;
};
// @lc code=end
