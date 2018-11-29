/**
 * Created by zenghongtu on 2018-11-29
 * Desc: https://leetcode.com/problems/binary-tree-preorder-traversal/
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
var preorderTraversal = function (root) {
  const res = [];
  const traver = (node, res) => {
    if (!node) return;
    // 先序遍历, 优先添加本节点的值
    res.push(node.val);
    // 在处理左侧节点
    traver(node.left, res);
    // 最后处理右侧节点
    traver(node.right, res);
  };
  traver(root, res);
  return res;
};