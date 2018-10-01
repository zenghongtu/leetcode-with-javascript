/**
 * Created by zenghongtu on 01/10/2018
 * Desc: 704. Binary Search
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let r = nums.length - 1;
    let l = 0;
    while (l <= r) {
        const mid = parseInt((r + l) / 2);
        if (target === nums[mid]) return mid;

        if (target < nums[mid]) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
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
