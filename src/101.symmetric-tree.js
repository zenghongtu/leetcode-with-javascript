/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }

  function isMirror(s, t) {
    if (!s && !t) {
      return true;
    }
    if (!s || !t || s.val !== t.val) {
      return false;
    }

    // 关键： 比对的是左节点的左边和右节点的右边，以及左节点的右边和右节点的左边
    return isMirror(s.left, t.right) && isMirror(s.right, t.left);
  }

  return isMirror(root.left, root.right);
};
