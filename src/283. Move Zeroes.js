/**
 * Created by zenghongtu on 01/10/2018
 * Desc: 283. Move Zeroes
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let cur = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            if (i !== cur) {
                const tmp = nums[i];
                nums[i] = nums[cur];
                nums[cur] = tmp;
            }
            cur++
        }
    }
};

const nums = [0, 1];
moveZeroes(nums);
if (JSON.stringify(nums) === '[1,0]') {
    console.log('测试通过')
} else {
    console.log('测试失败');
}
