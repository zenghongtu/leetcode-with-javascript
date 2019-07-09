/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (q === p) {
    return true;
  }

  if (q === null || p === null) {
    return false;
  }

  let result = true;

  const traver = (p, q) => {
    if (!result) {
      return;
    }
    if (p.val !== q.val) {
      result = false;
      return;
    }

    if (p.left && q.left) {
      traver(p.left, q.left);
    } else if (
      (p.left === null && q.left !== null) ||
      (p.left !== null && q.left === null)
    ) {
      result = false;
      return
    }

    if (p.right && q.right) {
      traver(p.right, q.right);
    } else if (
      (p.right === null && q.right !== null) ||
      (p.right !== null && q.right === null)
    ) {
      result = false;
      return
    }
  };
  traver(p, q);

  return result;
};
