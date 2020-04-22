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
  // BFS
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

var levelOrder = function (root) {
  // DFS
  if (!root) {
    return [];
  }

  const ret = [];

  const recursive = (node, level) => {
    node.left && recursive(node.left, level + 1);

    node.right && recursive(node.right, level + 1);

    ret[level] ? ret[level].push(node.val) : (ret[level] = [node.val]);
  };

  recursive(root, 0);

  return ret;
};
// @lc code=end
