/**
 * Created by zenghongtu on 04/10/2018
 * Desc: https://leetcode.com/problems/container-with-most-water/description/
 */


/**
 * @param {number[]} height
 * @return {number}
 */
// 指针对撞
var maxArea = function (height) {
    // 定义左边部分 index
    let l = 0,
        // 定义右边部分 index
        r = height.length - 1;
    // 存储的最多水量
    let water = 0;
    // 左边和右边比较后,最矮那边出现的最高高度
    let h = 0;
    // 当 l<r 才能满足循环条件
    while (l < r) {
        // 如果右边当前高度小于最矮那边出现的最高高度
        if (height[r] <= h) {
            // 右边 index 往左移一位
            r--;
            continue
        }
        // 左边同理
        if (height[l] <= h) {
            l++;
            continue
        }
        // 取左边和右边中最矮的部分
        h = Math.min(height[r], height[l]);
        // 取当计算的 water 和 记录的 water 中最大的值
        water = Math.max(water, (r - l) * h);
    }
    // 返回最多存储水量
    return water
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const r = maxArea(height);

if (r === 49) {
    console.log('测试通过');
} else {
    console.log(r);
    console.log('测试失败');
}
