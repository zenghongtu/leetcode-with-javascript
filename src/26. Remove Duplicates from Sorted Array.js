/**
 * Created by zenghongtu on 02/10/2018
 * Desc: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
// 重点是入参为 sorted array
var removeDuplicates = function (nums) {
    // 初始化新index
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        // 如果当前值和下一个值不相同时
        if (nums[i] !== nums[i + 1]) {
            // 设置下标 j 的值为当前值
            nums[j++] = nums[i]
        }
    }
    // 返回去重后的长度
    return j
};


const nums = [1, 1, 2];
const result = removeDuplicates(nums);
if (result === 2) {
  console.log('\x1b[32mSuccess')
} else {
    console.log('测试失败');
}
