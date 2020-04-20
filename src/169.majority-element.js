/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement1 = function (nums) {
  const len = nums.length;

  let i = -1;

  // 暴力解法：双层循环
  while (++i < len) {
    let count = 0;

    const curr = nums[i];

    let j = -1;

    while (++j < len) {
      nums[j] === curr && count++;
    }

    if (count > len / 2) {
      return curr;
    }
  }
};

var majorityElement2 = function (nums) {
  const len = nums.length;

  // map 计数
  const map = {};

  let i = -1;
  while (++i < len) {
    const curr = nums[i];

    map[curr] = (map[curr] || 0) + 1;

    if (map[curr] > len / 2) {
      return curr;
    }
  }
};

var majorityElement3 = function (nums) {
  const len = nums.length;

  if (len < 2) {
    return nums[0];
  }

  // 排序
  nums = nums.sort((a, b) => a - b);

  // 计数
  let count = 0;

  let i = -1;

  // 记录一下前一个值
  let prevNum;

  while (++i < len) {
    if (prevNum === nums[i]) {
      if (++count > len / 2) {
        return nums[i];
      }
    } else {
      count = 1;
      prevNum = nums[i];
    }
  }
};

var majorityElement = function (nums) {
  // majority element 的数量大于 n/2，所以一定可以取到
  return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
};
// @lc code=end
