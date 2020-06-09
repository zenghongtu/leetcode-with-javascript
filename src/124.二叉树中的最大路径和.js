/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -Infinity;

  let dfs = (node) => {
    if (node === null) return 0;

    // 小于0的直接取 0（舍弃小于0的数）
    let leftVal = Math.max(dfs(node.left), 0);
    let rightVal = Math.max(dfs(node.right), 0);

    max = Math.max(leftVal + rightVal + node.val, max);

    // 只需要返回 该节点 加上 两边的较大值，用于上一层 dfs 的相加
    return node.val + Math.max(leftVal, rightVal);
  };

  dfs(root);
  return max;
};
// @lc code=end
