/**
 * Created by zenghongtu on 04/10/2018
 * Desc: https://leetcode.com/problems/intersection-of-two-arrays/description/
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // 使用 Set 对 nums1 进行去重
    const set1 = new Set(nums1);
    // 创建 set2 用于存储交集
    const set2 = new Set();
    let i = 0, len = nums2.length;
    while (i < len) {
        // 判断 set1 是否有 nums2 中当前 index 指向的元素
        if (set1.has(nums2[i])) {
            // 向 set2 添加该元素
            set2.add(nums2[i])
        }
        i++
    }
    // 把 set2 转换为数组并返回
    return [...set2]
};

const nums1 = [1, 2, 2, 1], nums2 = [2, 2];
const result = intersection(nums1, nums2);
if (JSON.stringify(result) === '[2]') {
  console.log('\x1b[32mSuccess');
} else {
    console.log(result);
    console.log('测试失败');
}
