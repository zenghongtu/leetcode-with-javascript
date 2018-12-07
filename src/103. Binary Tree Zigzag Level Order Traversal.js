/**
 * Created by zenghongtu on 2018-12-07
 * Desc: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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
var zigzagLevelOrder = function (root) {
  // 队列存储层级数组
  const queue = [];
  // 层级
  let level = 0;
  traverse(root, level, queue);
  // 最后返回队列
  return queue;
};


function traverse(node, level, queue) {
  // 如果当前节点为 null,直接返回
  if (node === null) return;
  // 如果当前队列长度小于层级+1 ,则添加一个空数组
  if (queue.length < level + 1) queue.push([]);
  // 递归遍历左右节点
  traverse(node.right, level + 1, queue);
  traverse(node.left, level + 1, queue);
  // 如果是奇数层, 则按顺序添加到对应数组中
  if (level % 2) queue[level].push(node.val);
  // 如果是偶数层,则逆序添加
  else queue[level].unshift(node.val);
}
