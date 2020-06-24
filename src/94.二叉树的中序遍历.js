/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
  let result = [];

  if (root === null) {
    return result;
  }

  const stack = [];
  let node = root;

  while (stack.length > 0 || node) {
    while (node) {
      // 优先遍历左边节点
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();

    result.push(node.val);
    node = node.right;
  }

  return result;
};
// @lc code=end
