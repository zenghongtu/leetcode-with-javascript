/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const ret = [];

  const walker = (node) => {
    node.left && walker(node.left);
    ret.push(node.val);
    node.right && walker(node.right);
  };

  walker(root);
  return ret;
};
// @lc code=end
