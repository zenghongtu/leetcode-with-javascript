/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 *
 * https://leetcode-cn.com/problems/binary-search/description/
 *
 * algorithms
 * Easy (53.53%)
 * Likes:    138
 * Dislikes: 0
 * Total Accepted:    52.4K
 * Total Submissions: 96.4K
 * Testcase Example:  '[-1,0,3,5,9,12]\n9'
 *
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的
 * target，如果目标值存在返回下标，否则返回 -1。
 *
 *
 * 示例 1:
 *
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 *
 *
 * 示例 2:
 *
 * 输入: nums = [-1,0,3,5,9,12], target = 2
 * 输出: -1
 * 解释: 2 不存在 nums 中因此返回 -1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 你可以假设 nums 中的所有元素是不重复的。
 * n 将在 [1, 10000]之间。
 * nums 的每个元素都将在 [-9999, 9999]之间。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// https://leetcode-cn.com/explore/learn/card/binary-search/212/template-analysis/847/
var search = function (nums, target) {
  const len = nums.length;
  let left = 0,
    right = len - 1;
  let mid;

  // 剩两个元素(left+1 < right 会使 mid 为 left 和 right 的中间数，最后得到 left/left+1 或者 right/right-1)
  while (left + 1 < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (nums[right] === target) return right;
  if (nums[left] === target) return left;

  return -1;
};

var search1 = function (nums, target) {
  const len = nums.length;
  let left = 0,
    right = len - 1;
  let mid;

  // 啥都不剩
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};
// @lc code=end
