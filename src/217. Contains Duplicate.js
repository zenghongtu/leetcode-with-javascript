/**
 * Created by zenghongtu on 05/11/2018.
 * Desc: https://leetcode.com/problems/contains-duplicate/
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const len = nums.length;
  if (len < 1) return false;
  let i = 0;
  // 记录出现过的值,以值为 key,index 为 value
  const memo = {};
  while (i < len) {
    // 如果找到这个值(即出现过)就返回 true
    if (memo[nums[i]] !== undefined) return true;
    // 把当前值添加进去
    memo[nums[i]] = i;
    i++
  }
  // 如果循环中没有返回,最后返回 false
  return false
};


const input = [1, 2, 3, 1];
const result = containsDuplicate(input);

if (result === true) {
  console.log('测试通过');
} else {
  console.log(result);
}
