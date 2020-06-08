/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  const ret = [];

  // bfs 使用队列
  const queue = [];

  // 记录每个 node 的 level
  queue.push({ level: 0, node: root });

  while (queue.length > 0) {
    const { level, node } = queue.shift();

    if (!ret[level]) ret[level] = [];

    if (level % 2) {
      // 奇数行从左开始
      ret[level].unshift(node.val);
    } else {
      // 偶数行从右开始
      ret[level].push(node.val);
    }

    node.left && queue.push({ level: level + 1, node: node.left });
    node.right && queue.push({ level: level + 1, node: node.right });
  }

  return ret;
};
// @lc code=end
