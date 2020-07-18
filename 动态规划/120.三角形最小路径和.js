/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 *
 * https://leetcode-cn.com/problems/triangle/description/
 *
 * algorithms
 * Medium (64.54%)
 * Likes:    532
 * Dislikes: 0
 * Total Accepted:    92.2K
 * Total Submissions: 138.5K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
 *
 * 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
 *
 *
 *
 * 例如，给定三角形：
 *
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 *
 *
 * 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
 *
 *
 *
 * 说明：
 *
 * 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。
 *
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let len = triangle.length;

  let map = {};

  // 当做一颗树
  const dfs = (x, y) => {
    if (map[`${x}${y}`]) {
      return map[`${x}${y}`];
    }
    const sum = triangle[x][y];
    if (x === len - 1) {
      return sum;
    }

    const ret = Math.min(dfs(x + 1, y), dfs(x + 1, y + 1)) + sum;

    map[`${x}${y}`] = ret;

    return ret;
  };

  return dfs(0, 0);
};

var minimumTotal1 = function (triangle) {
  let results = [];
  // 自底向上
  for (let i = triangle.length - 1; i >= 0; i--) {
    let nums = triangle[i];

    if (results.length < 1) {
      results = nums;
    } else {
      for (let j = 0; j < nums.length; j++) {
        results[j] = Math.min(results[j] + nums[j], results[j + 1] + nums[j]);
      }
    }
  }

  return results[0];
};
// @lc code=end
