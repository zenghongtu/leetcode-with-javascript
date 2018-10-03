/**
 * Created by zenghongtu on 03/10/2018
 * Desc: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
 */


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 思路:对撞指针
var twoSum = function (numbers, target) {
    // 左索引
    let l = 0,
        // 右索引
        r = numbers.length - 1;
    // 这里不用多说, l 肯定小于 r 的
    while (l < r) {
        // 左索引值加上右索引值
        const res = numbers[l] + numbers[r];
        // 如果等于目标值
        if (res === target) {
            // 则返回
            return [++l, ++r]
            // 小于目标值,则左索引往右移一位
        } else if (res < target) {
            l++
            // 否则大于目标值,则右索引往左移一位
        } else {
            r--
        }
    }
};

const numbers = [2, 7, 11, 15], target = 9;
const result = twoSum(numbers, target);
if (JSON.stringify(result) === '[1,2]') {
    console.log('测试通过');
} else {
    console.log(result);
    console.log('测试失败');
}
