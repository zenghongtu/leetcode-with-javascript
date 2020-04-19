/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//双指针解法
var threeSum = function (nums) {
  const results = [];

  // 小于3个，直接返回
  if (nums.length < 3) return results;

  nums = nums.sort((a, b) => a - b);

  let target = 0;

  // 取值到倒数第三位
  for (let i = 0; i < nums.length - 2; i++) {
    // 当 i 对应值大于目标值（此时失去左右指针移动的意义），停止遍历
    if (nums[i] > target) break;

    // 跳过重复的值（后面 l 会取到该值）
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;

    let r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum === target) {
        results.push([nums[i], nums[l], nums[r]]);

        // 跳过重复值
        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;

        l++;
        r--;
      } else if (sum < target) {
        // 小于当前值，左指针移动
        l++;
      } else {
        // 大于当前值，右指针移动
        r--;
      }
    }
  }
  return results;
};
// @lc code=end
