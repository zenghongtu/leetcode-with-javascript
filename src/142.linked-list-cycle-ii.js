/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const nodeMap = new Map();
  let node = head;

  while (node) {
    if (nodeMap.has(node)) {
      return node;
    }

    nodeMap.set(node, 1);
    node = node.next;
  }
  return null;
};
// @lc code=end
