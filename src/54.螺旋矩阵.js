/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix || matrix.length < 1) {
    return [];
  }

  const ret = [];

  // 确定上下左右四条边的位置
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;

  while (true) {
    // 在该行移动
    for (let i = left; i <= right; i++) {
      ret.push(matrix[top][i]);
    }
    // 将 top 往上提一层，并做判断
    if (++top > bottom) break;

    // 在该列移动
    for (let i = top; i <= bottom; i++) {
      ret.push(matrix[i][right]);
    }
    // 将 right 往左移动一列，并做判断
    if (--right < left) break;

    for (let i = right; i >= left; i--) {
      ret.push(matrix[bottom][i]);
    }
    // 将 bottom 往下移动一层，并做判断
    if (--bottom < top) break;

    for (let i = bottom; i >= top; i--) {
      ret.push(matrix[i][left]);
    }
    // 将 left 往右移动一列，并做判断
    if (++left > right) break;
  }

  return ret;
};
// @lc code=end
