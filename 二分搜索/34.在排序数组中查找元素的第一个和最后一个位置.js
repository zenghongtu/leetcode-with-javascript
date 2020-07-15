/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (39.46%)
 * Likes:    473
 * Dislikes: 0
 * Total Accepted:    102.2K
 * Total Submissions: 257.3K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 *
 * 你的算法时间复杂度必须是 O(log n) 级别。
 *
 * 如果数组中不存在目标值，返回 [-1, -1]。
 *
 * 示例 1:
 *
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 *
 * 示例 2:
 *
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const len = nums.length;
  let left = 0,
    right = len - 1;

  let mid;

  const result = [];

  while (left + 1 < right) {
    mid = Math.floor((left + right) / 2);

    // 找最小，优先左边
    if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if (nums[left] === target) {
    result.push(left);
  } else if (nums[right] === target) {
    result.push(right);
  }

  left = result[0];
  right = len - 1;

  while (left + 1 < right) {
    mid = Math.floor((left + right) / 2);

    // 找最大，优先右边
    if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }

  if (nums[right] === target) {
    result.push(right);
  } else if (nums[left] === target) {
    result.push(left);
  }

  // 没有两个，返回[-1,-1]
  return result.length === 2 ? result : [-1, -1];
};
// @lc code=end
