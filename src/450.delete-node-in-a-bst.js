/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root === null) return null;
  // 当找到该值对应的节点，处理该节点
  if (root.val === key) {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    // 将右节点提上来
    let node = root.right;
    while (node.left) {
      node = node.left;
    }
    // 原来的左节点放到新root节点左侧
    node.left = root.left;
    return root.right;
  }
  // 在哪一侧就处理哪一侧的
  if (root.val > key) root.left = deleteNode(root.left, key);
  else if (root.val < key) root.right = deleteNode(root.right, key);
  // 最后返回root节点
  return root;
};
