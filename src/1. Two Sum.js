/**
 * Created by zenghongtu on 16/10/2018.
 * Desc: https://leetcode.com/problems/two-sum/description/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let i = 0,
        len = nums.length;
    // 存储出现过的数字
    let map = {};
    while (i < len) {
        // 如果差值在 map 中存在
        if (map[target - nums[i]] !== undefined) {
            // 返回 map 中对应值,i
            return [map[target - nums[i]], i]
        }
        // 在 map中存储,当前值为 key,i 为 value
        map[nums[i]] = i;
        i++
    }
};

const nums = [3, 2, 4], target = 6;
const result = twoSum(nums, target);

if (JSON.stringify(result) === JSON.stringify([1, 2])) {
  console.log('\x1b[32mSuccess');
} else {
    console.log(result);
}
