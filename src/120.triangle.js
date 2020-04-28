/*
 * @lc app=leetcode id=120 lang=javascript
 *
 * [120] Triangle
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function (triangle) {
  // 从倒数第二排开始（需要与倒数第一排进行计算）
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      // 计算出当前所在位置的和，并赋值到当前位置上
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  // 顶点就是最小值
  return triangle[0][0];
};

var minimumTotal = function (triangle) {
  // 使用一个数据存储数值
  let ret = triangle[triangle.length - 1];

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      ret[j] = Math.min(ret[j], ret[j + 1]) + triangle[i][j];
    }
  }
  return ret[0];
};
// @lc code=end
