/**
 * Created by zenghongtu on 02/10/2018
 * Desc: https://leetcode.com/problems/remove-element/description/
 */


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // 新数组当前的index
    let cur = 0;
    // 循环处理数组
    for (let i = 0; i < nums.length; i++) {
        // 数组当前值与 val 不同则进行处理
        if (nums[i] !== val) {
            // 如果新数组当前(cur)的值与循环(i)的值不同时则进行处理
            if (cur !== i) {
                // 把当前的值给新数组
                nums[cur] = nums[i]
            }
            cur++
        }
    }
    return cur
};


const nums = [3, 2, 2, 3];
const target = 3;
const result = removeElement(nums, target);
if (result === 2) {
    console.log('测试通过')
} else {
    console.log('测试失败');
}
