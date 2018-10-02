/**
 * Created by zenghongtu on 01/10/2018
 * Desc: https://leetcode.com/problems/binary-search/description/
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // 定义右边部分 index
    let r = nums.length - 1;
    // 定义左边部分 index
    let l = 0;
    while (l <= r) {
        // 获取中间值并取整
        const mid = parseInt((r + l) / 2);
        // 如果中间值是目标值则直接返回
        if (target === nums[mid]) return mid;
        // 如果中间值大于目标值则将右边 index 设置为中间值
        if (target < nums[mid]) {
            r = mid - 1
            // 如果中间值小于目标值则将左边 index 设置为中间值
        } else {
            l = mid + 1
        }
    }
    // 没有找到则返回-1
    return -1
};

const nums = [-1, 0, 3, 5, 9, 12];
const target = 2;
const r = search(nums, target);
if (r === -1) {
    console.log('测试通过!');
} else {
    console.log('测试失败')
}
