/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth1 = function (root) {
  // BFS 1
  let max = 0;

  if (root) {
    let queue = [{ node: root, level: 1 }];
    while (queue.length > 0) {
      const { node, level } = queue.shift();

      if (node) {
        max = Math.max(max, level);
        node.left && queue.push({ node: node.left, level: level + 1 });
        node.right && queue.push({ node: node.right, level: level + 1 });
      }
    }
  }
  return max;
};

var maxDepth2 = function (root) {
  // BFS 2
  let max = 0;

  if (root) {
    let queue = [root];

    while (queue.length > 0) {
      let currLen = queue.length;

      while (currLen--) {
        const node = queue.shift();
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
      max++;
    }
  }

  return max;
};

var maxDepth = function (root) {
  // DFS
  if (!root) {
    return 0;
  }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

// @lc code=end
