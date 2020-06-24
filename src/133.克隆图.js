/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return node;
  const map = new Map();

  const stack = [node];

  let cloneNode = new Node(node.val);

  map.set(node, cloneNode);

  while (stack.length > 0) {
    const _node = stack.pop();

    const _cloneNode = map.get(_node);

    for (const item of _node.neighbors) {
      if (!map.has(item)) {
        stack.push(item);
        const newNode = new Node(item.val);
        map.set(item, newNode);
      }

      _cloneNode.neighbors.push(map.get(item));
    }
  }
  return cloneNode;
};
// @lc code=end
