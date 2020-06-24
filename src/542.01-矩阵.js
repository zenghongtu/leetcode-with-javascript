/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 *
 * https://leetcode-cn.com/problems/01-matrix/description/
 *
 * algorithms
 * Medium (44.64%)
 * Likes:    280
 * Dislikes: 0
 * Total Accepted:    34K
 * Total Submissions: 76K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。
 *
 * 两个相邻元素间的距离为 1 。
 *
 * 示例 1:
 * 输入:
 *
 *
 * 0 0 0
 * 0 1 0
 * 0 0 0
 *
 *
 * 输出:
 *
 *
 * 0 0 0
 * 0 1 0
 * 0 0 0
 *
 *
 * 示例 2:
 * 输入:
 *
 *
 * 0 0 0
 * 0 1 0
 * 1 1 1
 *
 *
 * 输出:
 *
 *
 * 0 0 0
 * 0 1 0
 * 1 2 1
 *
 *
 * 注意:
 *
 *
 * 给定矩阵的元素个数不超过 10000。
 * 给定矩阵中至少有一个元素是 0。
 * 矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  let cMatrix = JSON.parse(JSON.stringify(matrix));

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) continue;
      cMatrix[row][col] = bfs(row, col);
    }
  }

  // 广度优先搜索
  function bfs(row, col) {
    const ways = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];

    let queue = [];
    let step = 0;
    queue.push([row, col, step]);

    while (queue.length > 0) {
      let [_row, _col, _step] = queue.shift();

      for (const way of ways) {
        const r = _row + way[0];
        const c = _col + way[1];

        if (
          r < 0 ||
          r > matrix.length - 1 ||
          c < 0 ||
          c > matrix[0].length - 1
        ) {
          continue;
        }

        // 只要找到一个0，它就是最近距离
        if (matrix[r][c] === 0) {
          step = _step + 1;
          queue = [];
          break;
        }

        queue.push([r, c, _step + 1]);
      }
    }

    return step;
  }

  return cMatrix;
};

// @lc code=end
