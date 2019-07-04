/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */
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
var maxDepth = function(root) {
  let depth = 0;
  const recursive = (treeNode, _depth = 0) => {
    if (!treeNode) {
      _depth > depth && (depth = _depth);
      return;
    }

    _depth++;

    recursive(treeNode.right, _depth);
    recursive(treeNode.left, _depth);
  };

  recursive(root);

  return depth;
};
