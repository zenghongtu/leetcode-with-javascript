/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  // 中序遍历
  const result = [];
  const traver = node => {
    if (!node) return;
    if (result.length >= k) return;
    traver(node.left);
    if (result.length >= k) return;
    result.push(node.val);
    traver(node.right);
  };
  traver(root);
  // 取第 k 为出来（从0开始，需要-1）
  return result[k - 1];
};
