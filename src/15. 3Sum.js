/**
 * Created by zenghongtu on 16/10/2018.
 * Desc: https://leetcode.com/problems/3sum/description/
 */


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
    // 思路: 首先记录每个数出现的频率到查找表,排序去重,再比对计算结果
var threeSum1 = function (nums) {
        let i = 0,
            j = 0,
            len = nums.length;
        // 查找表
        const freq = {};
        // 结果数组
        const result = [];
        while (i < len) {
            // 记录每个数频率
            freq[nums[i]] = (freq[nums[i]] || 0) + 1;
            i++
        }
        // 边界情况
        if (freq[0] >= 3) result.push([0, 0, 0]);

        // 去重
        const newNums = [...new Set(nums)];
        // 排序,从小到大
        newNums.sort((a, b) => a - b);

        const newLen = newNums.length;
        while (j < newLen) {
            // 数组接下来需要处理的索引
            let k = j + 1;
            while (k < newLen) {
                // 其中一种情况,当前 j 索引对应值*2加上 k 对应值等于零,且改值出现的频率大于等于2
                if (newNums[j] * 2 + newNums[k] === 0 && freq[newNums[j]] >= 2) {
                    // 添加到结果数组
                    result.push([newNums[j], newNums[j], newNums[k]])
                }
                // 另外一种情况
                if (newNums[j] + newNums[k] * 2 === 0 && freq[newNums[k]] >= 2) {
                    result.push([newNums[j], newNums[k], newNums[k]])
                }
                //  tmp 为所需要的值
                const tmp = 0 - newNums[j] - newNums[k];
                // 1. tmp 大于当前 k 的值,可以推断 tmp 对应的 index 大于当前 k(即不会出现在之前处理过的区间内)
                // 2. tmp 的频率不为 undefined (即在如参 nums 中存在)
                if (tmp > newNums[k] && freq[tmp] !== undefined) {
                    result.push([newNums[j], newNums[k], tmp])
                }
                k++
            }
            j++
        }
        return result
    };

// 排序后用双索引取值
var threeSum = function (nums) {
    // 从小到大,排序
    nums.sort((a, b) => a - b);
    // 结果数组
    const result = [];
    let i = 0,
        len = nums.length;
    while (i < len) {
        // 边界条件i 等于0, 当前值不等于上一个值(同一值只处理一次)
        if (i === 0 || nums[i] !== nums[i - 1]) {
            // 所需值
            const a = 0 - nums[i];
            // 定义左索引
            let l = i + 1,
                // 右索引
                r = len - 1;
            // 基本条件 左索引小于右索引
            while (l < r) {
                // l 对应值和 r 对应值相加得到目前值
                const b = nums[l] + nums[r];
                // 所需值和目前值相等时,则表明找到需要的值
                if (a === b) {
                    result.push([nums[i], nums[l], nums[r]]);
                    // 往右移一位
                    l++;
                    // 当 l<r (基本条件),并且 l 和 l-1所对应值相等
                    while (l < r && nums[l] === nums[l - 1]) {
                        // 再往右一位
                        l++
                    }
                    // 往左移一位
                    r--;
                    // 同理
                    while (l < r && nums[r] === nums[r + 1]) {
                        r--
                    }
                    // 所需值大于目前值,则需要增加目前值
                } else if (a > b) {
                    // 左索引往右移一位
                    l++
                } else {
                    // 否则,减小目前值,右索引往左移一位
                    r--
                }
            }
        }
        i++
    }
    return result
};

const nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);

if (JSON.stringify(result) === JSON.stringify([[-1, 0, 1], [-1, -1, 2]])) {
  console.log('\x1b[32mSuccess');
} else {
    console.log(result);
}

