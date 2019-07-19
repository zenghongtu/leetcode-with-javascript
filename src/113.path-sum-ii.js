/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const result = [];
  if (root) {
    const revise = (node, arr) => {
      const _arr = [...arr, node.val];

      if (!node.left && !node.right) {
        const curSum = _arr.reduce((a, b) => a + b, 0);
        if (curSum === sum) {
          result.push(_arr);
        }
      }

      if (node.left) {
        revise(node.left, _arr);
      }
      if (node.right) {
        revise(node.right, _arr);
      }
    };
    revise(root, []);
  }
  return result;
};
