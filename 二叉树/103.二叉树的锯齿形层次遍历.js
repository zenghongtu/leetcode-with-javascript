/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (54.36%)
 * Likes:    193
 * Dislikes: 0
 * Total Accepted:    51.1K
 * Total Submissions: 93.8K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回锯齿形层次遍历如下：
 *
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 *
 *
 */

// @lc code=start
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
  if (!root) {
    return [];
  }
  const result = [];

  const queue = [];

  queue.push({ node: root, level: 0 });

  while (queue.length > 0) {
    const { node, level } = queue.shift();

    if (!result[level]) result[level] = [];
    if (level % 2 !== 0) {
      result[level].unshift(node.val);
    } else {
      result[level].push(node.val);
    }

    node.left && queue.push({ node: node.left, level: level + 1 });
    node.right && queue.push({ node: node.right, level: level + 1 });
  }

  return result;
};
// @lc code=end
