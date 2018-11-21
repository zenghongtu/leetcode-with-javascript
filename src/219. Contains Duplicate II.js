/**
 * Created by zenghongtu on 05/11/2018.
 * Desc: https://leetcode.com/problems/contains-duplicate-ii/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 查找表 + 滑动窗口
var containsNearbyDuplicate = function (nums, k) {
  const len = nums.length;
  if (len < 1 || k < 1) return false;
  // 缓存查找到的值所在index
  const cache = {};
  let i = 0;
  while (i < len) {
    // 获取当前值对应 index
    const num = cache[nums[i]];
    // 如果 index 不为空,且小于等于 k, 返回 true
    if (num !== null && i - num <= k) return true;
    // 缓存新的当前值所在 index
    cache[nums[i]] = i;
    i++
  }
  // 没有获取到则返回 false
  return false
};


const nums = [1, 0, 1, 1], k = 1;
const result = containsNearbyDuplicate(nums, k);
if (result === true) {
  console.log('\x1b[32mSuccess');
} else {
  console.log(result);
}
