/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (73.09%)
 * Likes:    559
 * Dislikes: 0
 * Total Accepted:    185.5K
 * Total Submissions: 252.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 *
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最大深度 3 。
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
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  if (left > right) {
    return left + 1;
  }
  return right + 1;
};

var maxDepth1 = function (root) {
  let maxDepth = 0;
  const dfs = (node = root, level = 0) => {
    maxDepth = Math.max(maxDepth, ++level);

    if (node.left) {
      dfs(node.left, level);
    }

    if (node.right) {
      dfs(node.right, level);
    }
  };

  if (root) {
    dfs();
  }
  return maxDepth;
};
// @lc code=end
