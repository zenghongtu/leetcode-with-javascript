/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let ret = [];

  const len = nums.length;
  if (nums === null || len < 3) return ret;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    // 大于0，三数之和不可能为0
    if (nums[i] > 0) {
      break;
    }

    // 跳过重复
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let L = i + 1;
    let R = len - 1;

    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        ret.push([nums[i], nums[L], nums[R]]);

        // 跳过重复
        while (L < R && nums[L] === nums[L + 1]) {
          L++;
        }

        while (L < R && nums[R] === nums[R - 1]) {
          R--;
        }

        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else {
        R--;
      }
    }
  }
  return ret;
};
// @lc code=end
