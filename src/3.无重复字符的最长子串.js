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
  const freq = {};

  let leftIdx = 0,
    rightIdx = 0,
    maxLen = 0,
    len = s.length;

  // 滑动窗口
  for (; leftIdx < len; leftIdx++) {
    // 如果之前不存在该值，往右移
    while (rightIdx < len && !freq[s[rightIdx]]) {
      freq[s[rightIdx]] = 1;

      rightIdx++;
    }

    // 记录此时最大长度
    maxLen = Math.max(maxLen, rightIdx - leftIdx);

    if (freq[s[leftIdx]]) {
      // 下一个循环会把当前值去掉，所以减一
      freq[s[leftIdx]]--;
    }
  }

  return maxLen;
};
// @lc code=end
