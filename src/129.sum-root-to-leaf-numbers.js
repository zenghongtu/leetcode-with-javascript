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

  const dfs = (curSum, pNum, node) => {
    if (!node.left && !node.right) {
      return curSum + pNum * 10 + node.val;
    } else {
      pNum = pNum * 10 + node.val;
      if (node.left) {
        curSum = dfs(curSum, pNum, node.left);
      }
      if (node.right) {
        curSum = dfs(curSum, pNum, node.right);
      }
      return curSum;
    }
  };
  return dfs(0, 0, root);
};
