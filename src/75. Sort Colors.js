/**
 * Created by zenghongtu on 02/10/2018
 * Desc: https://leetcode.com/problems/sort-colors/description/
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 三路快排
var sortColors = function (nums) {
    // 这里可以添加对入参的检测,防止传入除0,1,2之外的值
    // 左侧为 '0路',初始值为-1(即不在数组的 index 内)
    let zero = -1;
    // 右侧为 '2路',初始值为其长度(也不在其 index 内)
    let two = nums.length;
    // '1路' 略
    for (let i = 0; i < two;) {
        if (nums[i] === 1) {
            // 当值为1时不进行处理
            i++
        } else if (nums[i] === 2) {
            // 当值为2是,将当前值和'2路'末位进行交换
            two--;
            const tmp = nums[i];
            nums[i] = nums[two];
            nums[two] = tmp
        } else {
            // 当值为0时,将当前值和'0路'首位进行交换
            zero++;
            const tmp = nums[i];
            nums[i] = nums[zero];
            nums[zero] = tmp;
            i++
        }
    }
};

const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums);
if (JSON.stringify(nums) === '[0,0,1,1,2,2]') {
    console.log('测试通过')
} else {
    console.log(nums);
    console.log('测试失败');
}
