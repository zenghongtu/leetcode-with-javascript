/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let len = nums.length;
  if (len < 1) {
    return -1;
  }

  let l = 0,
    r = len - 1;

  while (l <= r) {
    let mid = Math.floor((r + l) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // 左边为升序
    if (nums[0] <= nums[mid]) {
      // 判断是否在左边
      if (nums[0] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        // 否则在右边继续查找
        l = mid + 1;
      }
      // 右边为升序
    } else {
      // 判断是否在右边
      if (nums[mid] < target && target <= nums[len - 1]) {
        l = mid + 1;
      } else {
        // 否则去左边继续查找
        r = mid - 1;
      }
    }
  }

  return -1;
};
// @lc code=end
