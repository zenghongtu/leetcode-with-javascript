/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
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
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (!root) {
    return 0;
  }
  let count = 0;

  // 递归处理传入的节点与当前sum值比对
  const check = (node, _sum) => {
     // 如果相等（即找到符合条件的 path），计数一次
    if (node.val === _sum) count++;
    // 递归处理左右节点，并出入减去当前值的sum
    node.left && check(node.left, _sum - node.val);
    node.right && check(node.right, _sum - node.val);
  };

  // 不断递归处理节点
  const walker = node => {
    check(node, sum);
    if (node.left) walker(node.left);
    if (node.right) walker(node.right);
  };
  walker(root);
  return count;
};
