/**
 * Created by zenghongtu on 05/12/2018
 * Desc: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  // 定义层级
  const level = 0,
    // 队列存储层对应数字
    queue = [];
  // 传入初始值
  traverse(root, level, queue);
  // 最后返回反转后的数组
  return queue.reverse();
};

function traverse(node, level, queue) {
  if (node === null) return;
  // 如果当前长度等于当前等级 (队列长度应该等于 level+1,所以需要向队列中添加空数组,)
  if (queue.length === level) {
    queue.push([]);
  }

  // 递归遍历二叉树
  traverse(node.left, level + 1, queue);
  traverse(node.right, level + 1, queue);
  // 添加当前值到对应层级中
  queue[level].push(node.val);
}
