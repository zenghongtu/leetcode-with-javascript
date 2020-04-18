/*
 * @lc app=leetcode id=703 lang=javascript
 *
 * [703] Kth Largest Element in a Stream
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.nums = nums.sort((a, b) => b - a);
  this.k = k;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  const { nums, k } = this;

  //当前最小值位置为 k-1
  const min = nums[k - 1];

  // 如果比最小值小，直接返回最小值
  if (val <= min) {
    return min;
  }

  // 从当前最小值的位置开始比较
  let i = k - 1;

  // i-- 作为判断（需要比较到 0）
  while (i--) {
    if (nums[i] > val) {
      break;
    }
    // 将比它小的值往后移动
    nums[i + 1] = nums[i];
  }

  // 最后将它放到对应位置（此时为 i+1）
  nums[i + 1] = val;

  return nums[k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
