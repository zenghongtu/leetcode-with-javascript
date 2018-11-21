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
    // 先计算出第 k 大的数在数组中的 index
    const target = nums.length - k;
    const quickSort = (arr, start, end) => {
        // 如果起始 index 大于等于结束 index,不满足条件,直接返回
        if (start >= end) return;
        // 定义左边起始 index
        let l = start,
            // 右边起始 index
            r = end,
            // 定义基准值默认为起始index 对应值(或者随机值也可以)
            pivot = arr[start];
        // 必要条件,左边 index 小于右边 index
        while (l < r) {
            // 从右边开始(重点),如果从左边开始,当 l 停下时对应的值会大于基准值
            // 找到右边值小于 pivot 的 index
            while (arr[r] >= pivot && l < r) r--;
            // 找到左边值大于 pivot 的 index
            while (arr[l] <= pivot && l < r) l++;
            // 如果此时满足 l 小于 r 条件,将两边 index 对应值对换
            if (l < r) [arr[l], arr[r]] = [arr[r], arr[l]];
        }
        // 把基准值和当前 l 所在值进行对换(此时 l 对应值小于基准值)
        arr[start] = arr[l];
        arr[l] = pivot;
        // 对快排的一点点优化
        // 如果 l 小于目标 index, 可以推断目标值在 l 的左边,就只需要处理左边
        if (l < target) {
            quickSort(arr, l + 1, end)
            // 否则处理右边
        } else {
            quickSort(arr, start, l - 1);
        }
    };
    quickSort(nums, 0, nums.length - 1);
    // 返回目标值
    return nums[target]
};


const nums = [2, 1], k = 2;
const result = findKthLargest(nums, k);
if (result === 1) {
  console.log('\x1b[32mSuccess')
} else {
    console.log(result);
    console.log('测试失败');
}
