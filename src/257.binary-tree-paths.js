/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) {
    return [];
  }
  const result = [];
  const revise = (node, pathStr) => {
    if (!node.right && !node.left) {
      result.push(pathStr);
      return;
    }

    if (node.left) {
      revise(node.left, pathStr + "->" + node.left.val);
    }
    if (node.right) {
      revise(node.right, pathStr + "->" + node.right.val);
    }
  };
  revise(root, "" + root.val);
  return result;
};
