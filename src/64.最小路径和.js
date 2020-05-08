/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // 00不计算
      if (i === 0 && j === 0) {
        continue;
      } else if (i === 0) {
        // 只能加左边的
        grid[i][j] = grid[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        // 只能加上边的
        grid[i][j] = grid[i - 1][j] + grid[i][j];
      } else {
        // 加上边和左边中较小值
        grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
};
// @lc code=end
