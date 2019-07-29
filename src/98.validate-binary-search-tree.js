/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
// TODO
var isValidBST = function(root) {
  if (!root) {
    return true;
  }

  const dfs = (root, min, max) => {
    if (!root) {
      return true;
    }
    if (root.val <= min || root.val >= max) {
      return false;
    }
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  };
  return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};
