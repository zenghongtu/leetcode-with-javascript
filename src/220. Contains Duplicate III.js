/**
 * Created by zenghongtu on 05/11/2018.
 * Desc: https://leetcode.com/problems/contains-duplicate-iii/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
// 暴力方法
// var containsNearbyAlmostDuplicate = function (nums, k, t) {
//   const len = nums.length;
//   let i = 0;
//   while (i < len) {
//     let j = i+1;
//     while (j <= i + k) {
//       if (Math.abs(nums[j] - nums[i]) <= t) {
//         return true
//       }
//       j++
//     }
//     i++
//   }
//   return false
// };

// 利用查找表优化
// todo
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const len = nums.length;
  let i = 0;
  // (重点) 当 k 大于 2t 时可以考虑 [nums[i] - t, nums[i] + t] 区间, 从而可以使用查找表
  if (k > 2 * t) {
    let map = new Map();
    while (i < len) {
      let j = nums[i] - t;
      while (j <= nums[i] + t) {
        if (map.has(j) && i - map.get(j) <= k) {
          return true
        }
        map.set(nums[i], i);
        j++
      }
      i++
    }
    return false
  } else {
    while (i < len) {
      let j = i + 1;
      while (j <= i + k) {
        if (Math.abs(nums[j] - nums[i]) <= t) {
          return true
        }
        j++
      }
      i++
    }
    return false
  }
};

const nums = [1, 5, 9, 1, 5, 9], k = 2, t = 3;
const result = containsNearbyAlmostDuplicate(nums, k, t);
if (result === false) {
  console.log('\x1b[32mSuccess');
} else {
  console.log(result);
}
