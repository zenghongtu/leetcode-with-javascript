/**
 * Created by zenghongtu on 01/10/2018
 * Desc: 283. Move Zeroes
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const tmpList = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        nums[i] && tmpList.push(nums[i])
    }
    for (let i = 0, len = tmpList.length; i < len; i++) {
        nums[i] = tmpList[i]
    }
    for (let i = tmpList.length, len = nums.length; i < len; i++) {
        nums[i] = 0
    }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
if (JSON.stringify(nums) === '[1,3,12,0,0]') {
    console.log('测试通过')
} else {
    console.log('测试失败');
}
