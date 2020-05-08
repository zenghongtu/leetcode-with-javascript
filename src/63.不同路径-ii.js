/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  // 00为障碍，直接返回0
  if (obstacleGrid[0][0] === 1) return 0;

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      // 有障碍的设置为0
      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      } else {
        if (i === 0 && j === 0) {
          // 00 设置为1
          obstacleGrid[i][j] = 1;
        } else if (i === 0 && j !== 0) {
          // i 为0时，计算该行上的路径
          obstacleGrid[i][j] = obstacleGrid[i][j - 1];
        } else if (i !== 0 && j === 0) {
          // j 为0时，计算该竖上的路径
          obstacleGrid[i][j] = obstacleGrid[i - 1][j];
        } else {
          obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
        }
      }
    }
  }

  return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};
// @lc code=end
