/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = {};

  for (let i = 0, len = numbers.length; i < len; i++) {
    const curr = numbers[i];

    if (map[target - curr] > -1) {
      return [map[target - curr] + 1, i + 1];
    }
    map[curr] = i;
  }
  return null;
};
// @lc code=end
