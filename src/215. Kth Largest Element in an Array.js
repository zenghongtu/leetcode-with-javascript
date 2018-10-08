/**
 * Created by zenghongtu on 02/10/2018
 * Desc: https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let l = -1, r = nums.length, mid = null;
    for (let i = 0; i < nums.length; i++) {
        mid = parseInt((l + r) / 2);
        if (nums[mid]) {

        }
    }
};


const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4;
const result = findKthLargest(nums, k);
if (result === 4) {
    console.log('测试通过')
} else {
    console.log(result);
    console.log('测试失败');
}
