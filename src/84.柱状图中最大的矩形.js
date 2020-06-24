/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [];
  heights = [0, ...heights, 0];

  for (let i = 0; i < heights.length; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      const stackTopIndex = stack.pop();

      maxArea = Math.max(
        maxArea,
        heights[stackTopIndex] * (i - 1 - stack[stack.length - 1])
      );
    }
    stack.push(i);
  }
  return maxArea;
};

var largestRectangleArea1 = function (heights) {
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    const curr = heights[i];
    let area = curr;

    let l = i - 1;

    while (heights[l] >= curr) {
      area += curr;
      l--;
    }

    let r = i + 1;
    while (heights[r] >= curr) {
      area += curr;

      r++;
    }

    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};
// @lc code=end
