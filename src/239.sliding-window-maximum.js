/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length < 1) return [];

  // 存放 index
  const sWin = [];
  const res = [];

  let i = 0;

  while (i < nums.length) {
    const curr = nums[i];

    // 比对当前最左边 index 是否在窗口内的
    if (i >= k && sWin[0] <= i - k) {
      // 不在就踢出去
      sWin.shift();
    }

    // 将窗口内的值与当前值进行比较，踢掉小于它的值
    while (sWin.length > 0 && nums[sWin[sWin.length - 1]] < curr) {
      sWin.pop();
    }

    // 加入当前 index
    sWin.push(i);
    if (i >= k - 1) {
      // 最左边的为当前窗口中的最大值
      res.push(nums[sWin[0]]);
    }
    i++;
  }

  return res;
};

// 简单的方法
var maxSlidingWindow1 = function (nums, k) {
  if (nums.length < 1) return [];

  // 存放 index
  const sWin = [];
  const res = [];

  let i = 0;

  while (i < nums.length) {
    if (i >= k) {
      sWin.shift();
    }

    sWin.push(nums[i]);

    if (i >= k - 1) {
      res.push(Math.max(...sWin));
    }

    i++;
  }

  return res;
};
// @lc code=end
