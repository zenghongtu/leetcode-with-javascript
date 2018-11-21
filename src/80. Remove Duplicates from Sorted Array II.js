/**
 * Created by zenghongtu on 02/10/2018
 * Desc: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // 初始化新的 index (去除两次以上重复后的数组)
    let cur = 0;
    // 计数器,记录重复的次数
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        // 处理重复次数<2的
        if (count < 2) {
            // 如果cur和i 不相等
            if (cur !== i) {
                // nums[i] 的值给 cur 所在处
                nums[cur] = nums[i]
            }
            // 新数组 index 自增
            cur++
        }
        // 当前 idx 值和下一个 idx 值相等时
        if (nums[i] === nums[i + 1]) {
            // 计数器+1
            count++
        } else {
            // 如果不相等,重置计数器
            count = 0
        }
    }
    // 返回新数组长度
    return cur
};

const nums = [1, 1, 1, 2, 2, 3];
const result = removeDuplicates(nums);
if (result === 5 && JSON.stringify(nums.slice(0, 5)) === '[1,1,2,2,3]') {
  console.log('\x1b[32mSuccess')
} else {
    console.log(result);
    console.log(nums);
    console.log('测试失败');
}
