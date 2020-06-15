/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let result = [];
  let queue = [];

  // 层级对应 result 数组中的 index
  let level = 0;

  root && queue.push({ level, node: root });

  while (queue.length) {
    const { level, node } = queue.shift();
    result[level] = node.val;

    node.left && queue.push({ level: level + 1, node: node.left });
    node.right && queue.push({ level: level + 1, node: node.right });
  }

  return result;
};
// @lc code=end
