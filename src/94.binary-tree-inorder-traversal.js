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
var inorderTraversal1 = function (root) {
  if (!root) {
    return [];
  }

  const ret = [];

  // 递归左-中-右
  const walker = (node) => {
    node.left && walker(node.left);
    ret.push(node.val);
    node.right && walker(node.right);
  };

  walker(root);
  return ret;
};

var inorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const stack = [];
  const ret = [];

  // 循环
  while (root || stack.length) {
    while (root) {
      // 先将左节点全部加入栈中
      stack.push(root);
      root = root.left;
    }

    // 出栈
    root = stack.pop();
    // 取值
    ret.push(root.val);
    // 处理右边节点
    root = root.right;
  }

  return ret;
};
// @lc code=end
