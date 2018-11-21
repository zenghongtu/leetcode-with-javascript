/**
 * Created by zenghongtu on 02/10/2018
 * Desc: https://leetcode.com/problems/merge-sorted-array/description/
 */


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // nums1实际 index
    let l1 = m - 1,
        // nums2 index
        l2 = n - 1,
        // 新数组 index
        i = m + n - 1;
    // 当 nums1和 nums2 都有 index 没有进行比较,则进行处理
    // 注意是逆序的
    while (l1 > -1 && l2 > -1) {
        // nums1当前值大于nums2当前值
        if (nums1[l1] > nums2[l2]) {
            // 把 nums1当前值添加到新数组的当前 index 位置
            nums1[i] = nums1[l1];
            // nums1 index 往前挪移一位
            l1--
        } else {
            // 把 nums2当前值添加到新数组的当前 index 位置
            nums1[i] = nums2[l2];
            // nums2 index 往前挪移一位
            l2--
        }
        // 新数组 index 往前挪移一位
        i--
    }
    // nums2 与 nums1进行比较,可能有剩余项(即当 l2>-1 时)
    while (l2 > -1) {
        // 把 nums2当前值添加到新数组的当前 index 位置
        nums1[i] = nums2[l2];
        l2--;
        i--
    }
};

const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
const nums3 = [0], m2 = 0, nums4 = [1], n2 = 1;
merge(nums1, m, nums2, n);
merge(nums3, m2, nums4, n2);
if (JSON.stringify(nums1) === '[1,2,2,3,5,6]' && JSON.stringify(nums3) === '[1]') {
  console.log('\x1b[32mSuccess')
} else {
    console.log(nums1);
    console.log(nums3);
    console.log('测试失败');
}

