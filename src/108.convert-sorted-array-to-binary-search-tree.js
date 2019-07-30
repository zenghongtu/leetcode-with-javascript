/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length < 1) {
    // 这里是一个坑
    return null;
  }
  // 通过不断二分，实现 BST
  const half = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[half]);

  if (nums.slice(0, half).length > 0) {
    root.left = sortedArrayToBST(nums.slice(0, half));
  }
  if (nums.slice(half + 1).length > 0) {
    root.right = sortedArrayToBST(nums.slice(half + 1));
  }
  return root;
};
