/**
 * Created by zenghongtu on 2018-12-10
 * Desc: https://leetcode.com/problems/binary-tree-right-side-view/
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  // 如果为 null 则返回[]
  if (root === null) return [];
  // 数组中添加根对应值
  const arr = [root.val];
  // 递归计算左边树值
  const left = arr.concat(rightSideView(root.left));
  // 递归计算右边树值
  const right = arr.concat(rightSideView(root.right));
  // 如果右边的长度大于左边长度, 直接返回右边
  if (right.length > left.length) return right;
  // 否则返回右边部分和左边合并后的结果
  return [...right, ...left.slice(right.length,)];
};
