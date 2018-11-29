/**
 * Created by zenghongtu on 2018-11-29
 * Desc: https://leetcode.com/problems/binary-tree-postorder-traversal/
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
var postorderTraversal = function (root) {
  const res = [];
  const traver = (node, res) => {
    if (!node) return;
    // 后序遍历,先处理左节点
    traver(node.left, res);
    // 再处理右节点
    traver(node.right, res);
    // 最后添加自己的值
    res.push(node.val);
  };
  traver(root, res);
  return res;
};