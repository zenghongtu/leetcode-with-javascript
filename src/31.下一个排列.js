/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * 一种比较容易理解的表述：
 * 给定若干个数字，将其组合为一个整数。如何将这些数字重新排列，以得到下一个更大的整数。
 * 如123，下一个更大的数为132。如果没有更大的整数，则输出最小的整数。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) {
    return;
  }

  let len = nums.length;

  let i = len - 2;
  let j = len - 1;

  // 从末尾开始查找，找到不是升序的那个点
  while (i >= 0 && nums[i] >= nums[j]) {
    i--;
    j--;
  }

  // 找到符合交换的点
  let k = len - 1;
  if (i >= 0) {
    while (nums[i] >= nums[k]) {
      k--;
    }

    [nums[k], nums[i]] = [nums[i], nums[k]];
  }

  // 交换 j 到 len-1
  for (i = j, j = len - 1; i < j; --j, ++i) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
};
// @lc code=end
