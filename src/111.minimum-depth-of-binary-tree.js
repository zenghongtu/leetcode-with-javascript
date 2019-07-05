/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
var minDepth = function(root) {
  if (!root) {
    return 0;
  }
  
  let depth ;

  const recursive = (node, _depth) => {
    _depth++;
    if (!node.left && !node.right) {
      if (!depth || _depth < depth) {
        depth = _depth;
      }
    } else {
      if (node.left) {
        recursive(node.left, _depth);
      }
      if (node.right) {
        recursive(node.right, _depth);
      }
    }
  };
  
  recursive(root, 0);

  return depth;
};
