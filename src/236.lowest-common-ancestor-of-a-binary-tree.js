/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) return root;
  // 递归处理
  const resLeft = lowestCommonAncestor(root.left, p, q);
  const resRight = lowestCommonAncestor(root.right, p, q);
  // 返回结果
  return resLeft && resRight ? root : resLeft || resRight;
};
