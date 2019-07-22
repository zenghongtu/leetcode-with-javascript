/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
var sumNumbers = function(root) {
  if (!root) {
    return 0;
  }
  const result = [];
  const trave = (node, list = []) => {
    list.push(node.val);
    if (!node.left && !node.right) {
      result.push(list);
      return;
    }

    if (node.left) {
      trave(node.left, [...list]);
    }
    if (node.right) {
      trave(node.right, [...list]);
    }
  };
  trave(root);

  return result.reduce((a, b) => {
    return +b.reduce((_a, _b) => _a.toString() + _b.toString()) + a;
  }, 0);
};
