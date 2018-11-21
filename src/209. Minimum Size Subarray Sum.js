/**
 * Created by zenghongtu on 04/10/2018
 * Desc: https://leetcode.com/problems/minimum-size-subarray-sum/description/
 */


/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// 思路:滑动窗口
var minSubArrayLen = function (s, nums) {
    // 初始化左边为0
    let l = 0,
        // 初始化右边为-1
        r = -1,
        // 初始化 len 为 nums 长度
        len = nums.length,
        // 初始化最小子数组长度为 len+1
        minLen = len + 1,
        // 初始化当前子数组值为0
        sum = 0;
    // 如果左边 index 小于 nums 长度,则进行处理
    while (l < len) {
        // 左边index + 1 小于 nums 长度并且 sum 小于目标值 则进行处理
        if (r + 1 < len && sum < s) {
            // 累加右侧值
            sum += nums[++r]
        } else {
            // 减去左侧当前值
            sum -= nums[l++]
        }
        // 如果 sum 大于目标值
        if (sum >= s) {
            // 取当前子数组和新子数组中长度的最小值
            minLen = Math.min(minLen, r - l + 1)
        }
    }
    // 如果子数组长度大于数组长度
    if (minLen > len) {
        // 返回0
        return 0
    }
    // 返回最小子数组长度
    return minLen
};


const s = 7, nums = [2, 3, 1, 2, 4, 3];
const result = minSubArrayLen(s, nums);
if (result === 2) {
  console.log('\x1b[32mSuccess');
} else {
    console.log(result);
    console.log('测试失败');
}
