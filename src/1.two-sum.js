/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  let map = new Map();

  let i = 0;
  while (i < nums.length) {
    if (i > 0 && map.get(target - nums[i]) > -1) {
      return [i, map.get(target - nums[i])];
    }

    map.set(nums[i], i);

    i++;
  }
};

var twoSum = function (nums, target) {
  let set = new Set();

  let i = 0;
  while (i < nums.length) {
    if (i > 0 && set.has(target - nums[i])) {
      return [i, nums.indexOf(target - nums[i])];
    }

    set.add(nums[i]);

    i++;
  }
};
// @lc code=end
