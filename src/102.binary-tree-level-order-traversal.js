/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  // 用队列存储
  let queue = [root];

  const ret = [];

  while (queue.length > 0) {
    // 获取当前层级的节点
    const nodes = queue;

    queue = [];

    const _ret = [];

    // 遍历当前节点
    while (nodes.length > 0) {
      const node = nodes.shift();

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }

      _ret.push(node.val);
    }

    ret.push(_ret);
  }

  return ret;
};
// @lc code=end
