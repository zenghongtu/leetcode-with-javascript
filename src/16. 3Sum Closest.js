/**
 * Created by zenghongtu on 18/10/2018.
 * Desc: https://leetcode.com/problems/3sum-closest/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 双指针对撞
var threeSumClosest = function (nums, target) {
    // 先排个序
    nums.sort((a, b) => a - b);
    const len = nums.length;
    let i = 0,
        // 存储最小值
        closest;
    while (i < len) {
        // 左边取当前 index 前进一位,右边取末尾
        let l = i + 1, r = len - 1;
        // 必要条件 左边index小于右边
        while (l < r) {
            // 当前所有取序号之和
            const sum = nums[i] + nums[l] + nums[r];
            // 如果是目标值,直接返回结果
            if (sum === target) {
                return sum
                // 如果当前和大于目标值
            } else if (sum > target) {
                // 右边往左移一位(即减一)
                r--;
                // 如果左移一位值和之前相等,则继续往左移一位
                while (l < r && nums[r] === nums[r + 1]) {
                    r--
                }
            } else {
                // 左边同理
                l++;
                while (l < r && nums[l] === nums[l - 1]) {
                    l++
                }
            }
            // 比较当前 sum 和 target 之差,取绝对值小的
            closest = Math.abs(closest - target) < Math.abs(target - sum) ? closest : sum
        }
        i++
    }
    // 处理完成后返回结果
    return closest
};

const nums = [-1, 2, 1, -4], target = 1;
const result = threeSumClosest(nums, target);
if (result === 2) {
    console.log('测试通过');
} else {
    console.log(result);
}

