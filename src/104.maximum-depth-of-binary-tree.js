/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function (root) {
  // DFS

  let depth = 0;

  const recursive = (node, _depth) => {
    if (!node) {
      return;
    }

    ++_depth > depth && (depth = _depth);

    recursive(node.left, _depth);
    recursive(node.right, _depth);
  };

  recursive(root, 0);

  return depth;
};
// @lc code=end
