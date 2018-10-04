/**
 * Created by zenghongtu on 04/10/2018
 * Desc: https://leetcode.com/problems/minimum-size-subarray-sum/description/
 */


/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let i = 0, len = nums.length, subArrayLen = len;
    while (i < len) {
        let tmp = 0;
        let j = i + 1;
        while (nums[i] + tmp < s) {
            tmp += nums[j++]
        }
        if ((nums[i] + tmp) === s) {
            subArrayLen = Math.min(j - i, subArrayLen)
        }
        i++
    }
    return subArrayLen
};


const s = 7, nums = [2, 3, 1, 2, 4, 3];
const result = minSubArrayLen(s, nums);
if (result === 2) {
    console.log('测试通过');
} else {
    console.log(result);
    console.log('测试失败');
}
