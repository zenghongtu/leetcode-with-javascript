/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
// BST 中序遍历会得到一个 升序数组（只要当前值比前一个大）
var isValidBST = function (root) {
  if (!root) {
    return true;
  }

  // 记录前一个值
  let preValue = -Infinity;

  const compare = (val) => {
    if (val > preValue) {
      preValue = val;
      return true;
    }
    return false;
  };

  const isValid = (node) => {
    if (!node) {
      return true;
    }

    // 中序遍历
    return isValid(node.left) && compare(node.val) && isValid(node.right);
  };

  return isValid(root);
};

// 递归
var isValidBST1 = function (root) {
  if (!root) {
    return true;
  }

  // 递归比对左右节点大小
  const isValid = (node, min, max) => {
    if (!node) return true;

    if (node.val <= min) return false;
    if (node.val >= max) return false;

    return (
      isValid(node.right, node.val, max) && isValid(node.left, min, node.val)
    );
  };

  return isValid(root, -Infinity, Infinity);
};

// @lc code=end
