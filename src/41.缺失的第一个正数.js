/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    // 不断进行交换
    while (nums[i] >= 1 && nums[i] <= len && nums[i] !== nums[nums[i] - 1]) {
      // 3 放在索引为 2 的地方
      // 4 放在索引为 3 的地方
      // 注意顺序，反过来赋值不行
      // https://www.cnblogs.com/winder-knight/p/9837643.html
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }
  for (let i = 0; i < len; i++) {
    if (i + 1 !== nums[i]) {
      return i + 1;
    }
  }

  return len + 1;
};

// 用 map，不符合题目
var firstMissingPositive1 = function (nums) {
  const map = {};

  for (const i of nums) {
    map[i] = true;
  }

  let i = 1;

  while (map[i]) {
    i++;
  }

  return i;
};
// @lc code=end
