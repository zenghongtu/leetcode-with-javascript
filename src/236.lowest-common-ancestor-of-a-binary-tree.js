/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;

  // 查找左边
  const left = lowestCommonAncestor(root.left, p, q);

  // 查找右边
  const right = lowestCommonAncestor(root.right, p, q);

  // 如果在左边和右边都找到目标节点，则返回当前节点
  if (left && right) {
    return root;
  }

  return left || right || null;
};
// @lc code=end
