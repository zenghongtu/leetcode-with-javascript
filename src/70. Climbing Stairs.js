/**
 * Created by zenghongtu on 24/12/2018.
 * Desc: https://leetcode.com/problems/climbing-stairs/
 */

/**
 * @param {number} n
 * @return {number}
 */
// 递归
function compute(n, memo) {
  // 当台阶只有1阶或者0阶时,只有1种处理办法
  if (n === 0 || n === 1) {
    return 1;
  }
  // 如果 memo 中存在这个值的解
  if (memo[n]) {
    // 直接返回
    return memo[n]
  }
  // 否则存储至 memo 中,然后递归调用
  return memo[n] = compute(n - 1, memo) + compute(n - 2, memo)
}

var climbStairs = function (n) {
  // 缓存计算过的值
  const memo = {};
  // 返回结果
  return compute(n, memo)
};