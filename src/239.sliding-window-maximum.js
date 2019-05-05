/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const ret = [];
  // 处理 nums 为空的情况
  if (nums.length < 1) {
    return ret;
  }
  // 处理长度不足 k 的情况
  if (nums.length <= k) {
    return [Math.max(...nums)];
  }
  nums.reduce((_window, value) => {
    const len = _window.push(value);
    if (len >= k) {
      const max = Math.max(..._window);
      _window.shift();
      ret.push(max);
    }
    return _window;
  }, []);
  return ret;
};
