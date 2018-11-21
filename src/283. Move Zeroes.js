/**
 * Created by zenghongtu on 01/10/2018
 * Desc: https://leetcode.com/problems/move-zeroes/description/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    // 设置数组新的 index
    let cur = 0;
    for (let i = 0; i < nums.length; i++) {
        // 如果非0,则进行处理
        if (nums[i]) {
            // 如果 i 不等于 cur,交换它们所在 index 的值
            if (i !== cur) {
                const tmp = nums[i];
                nums[i] = nums[cur];
                nums[cur] = tmp;
            }
            // cur 始终自增
            cur++
        }
    }
};

const nums = [0, 1];
moveZeroes(nums);
if (JSON.stringify(nums) === '[1,0]') {
  console.log('\x1b[32mSuccess')
} else {
    console.log('测试失败');
}
