/**
 * Created by zenghongtu on 04/12/2018
 * Desc: https://leetcode.com/problems/binary-tree-level-order-traversal/
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
var levelOrder = function (root) {
  // 定义队列
  const queue = [];
  // 当前遍历层级
  let level = 0;

  levelRecursion(root, queue, level);
  // 返回队列
  return queue;
};

// 递归调用
function levelRecursion(node, queue, level) {
  if (node === null) return;
  // 如果小于等级+1(即下一层级没创建数组)
  if (queue.length < level + 1) {
    // 在队列后面添加空数组
    queue.push([]);
  }
  // 递归调用左右节点
  levelRecursion(node.left, queue, level + 1);
  levelRecursion(node.right, queue, level + 1);

  // 添加到对应队列层级中
  queue[level].push(node.val);
}
