/**
 * Created by zenghongtu on 2018-11-29
 * Desc: https://leetcode.com/problems/binary-tree-inorder-traversal/
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
var inorderTraversal = function (root) {
  // 递归遍历
  const traver = (node, res) => {
    if (!node) return;
    // 优先处理左侧值
    traver(node.left, res);
    // 再添加 root 自己的值
    res.push(node.val);
    // 最后处理右侧值
    traver(node.right, res);
  };
  let res = [];
  traver(root, res);
  return res
};


