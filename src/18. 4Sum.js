/**
 * Created by zenghongtu on 18/10/2018.
 * Desc: https://leetcode.com/problems/4sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let i = 0;
    const result = [],
        len = nums.length;
    if (len < 4) return result;
    // nums 中数字从小到大
    nums.sort((a, b) => a - b);
    // i 必须小于 len-3,否则后面进行的处理取不到 index
    while (i < len - 3) {
        // j 取当前 index 的下一个
        let j = i + 1;
        // 如果 i>0 ,并且当前 index 对应的数字和前一个 index 对应数字相等(已经处理过这个数),则往前移动一位
        if (i > 0 && nums[i] === nums[i - 1]) {
            i++;
            continue
        }
        // j 必须小于 len-2,否则后面无法进行处理
        while (j < len - 2) {
            // 目标值减去当前 i/j 对应值,取得差值
            const target1 = target - nums[i] - nums[j];
            // 双指针索引
            // 左索引(起始索引)
            let l = j + 1,
                // 右索引(结束索引)
                r = len - 1;
            // 这里和前面一样
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                j++;
                continue
            }
            // 必要条件,左索引小于右索引
            while (l < r) {
                // 当前 l 和 r 对应值和
                const sum = nums[l] + nums[r];
                // 如果和差值相等,则表示找到所需值
                if (sum === target1) {
                    // 添加到结果数组中
                    result.push([nums[i], nums[j], nums[l], nums[r]]);
                    // 左索引往右移一位
                    l++;
                    // 如果当前索引值和前一索引值相等(处理过相同值),则再往右移一位
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++
                    }
                    // 同理
                    r--;
                    while (l < r && nums[r] === nums[r + 1]) {
                        r--
                    }
                } else if (sum > target1) {
                    // 大于差值,就往左移一位(减少当前值)
                    r--;
                } else {
                    // 同理
                    l++;
                }
            }
            j++
        }
        i++
    }
    return result
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// var fourSum = function (nums, target) {
//     // sort
//     nums = nums.sort((a, b) => a - b);
//
//     var answer = [];
//     if (nums.length < 4) return answer;
//
//     for (var start = 0; start <= nums.length - 4; start++) {
//         if (start > 0 && nums[start] === nums[start - 1]) continue;
//         var _target = target - nums[start];
//
//         for (var i = start + 1; i <= nums.length - 3; i++) {
//             if (i > start + 1 && nums[i] === nums[i - 1]) continue;
//
//             for (var lo = i + 1, hi = nums.length - 1; lo < hi; /* blank */) {
//                 var sum = nums[i] + nums[lo] + nums[hi];
//
//                 if (sum === _target) {
//                     answer.push([nums[start], nums[i], nums[lo], nums[hi]]);
//                     while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
//                     while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
//                     lo++;
//                     hi--
//                 }
//                 else if (sum > _target) {
//                     hi--
//                 }
//                 else {
//                     lo++
//                 }
//             }
//         }
//     }
//
//     return answer
// };

const nums = [-1, -5, -5, -3, 2, 5, 0, 4], target = -7;
const result = fourSum(nums, target);
if (JSON.stringify(result) === JSON.stringify([[-5, -5, -1, 4], [-5, -3, -1, 2]])) {
    console.log('测试通过');
} else {
    console.log(result);
}
