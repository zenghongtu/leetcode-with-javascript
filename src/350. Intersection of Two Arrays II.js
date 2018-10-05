/**
 * Created by zenghongtu on 04/10/2018
 * Desc: https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // 返回结果以数组表示
    const result = [],
        // 记录各数字出现的次数
        record = {},
        // 数组长度
        len1 = nums1.length, len2 = nums2.length;
    // 初始化各数组index
    let i = 0, j = 0;
    while (j < len1) {
        // 当前 index 所对应的值
        const cur = nums1[j++];
        // 如果 record 中当前值为 undefined / 0
        if (!record[cur]) {
            // 将其赋值为0
            record[cur] = 0
        }
        // 出现次数 +1
        record[cur]++
    }
    while (i < len2) {
        const cur = nums2[i++];
        // 如果 record 中存在当前值
        if (record[cur]) {
            // 将它添加到result 中
            result.push(cur);
            // 出现次数 -1
            record[cur]--
        }
    }
    // 返回结果
    return result
};

const nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4];
const result = intersect(nums1, nums2);
if (JSON.stringify(result) === '[9,4]') {
    console.log('测试通过');
} else {
    console.log(result);
    console.log('测试失败');
}
