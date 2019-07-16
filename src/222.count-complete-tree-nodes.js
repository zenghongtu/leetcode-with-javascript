/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function(root) {
  if (!root) {
    return 0;
  }
  const stack = [root];
  let count = 1;

  while (stack.length > 0) {
    const node = stack.pop();
    if (node.left) {
      count++;
      stack.push(node.left);
    }
    if (node.right) {
      count++;
      stack.push(node.right);
    }
  }
  return count;
};
