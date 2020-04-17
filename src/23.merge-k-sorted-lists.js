/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length < 2) {
    return lists[0] || null;
  }

  let nodes = lists;

  let nodeValues = [];

  while (nodes.length > 0) {
    let _head = nodes.shift();
    while (_head) {
      nodeValues.push(_head.val);
      _head = _head.next;
    }
  }

  const head = new ListNode(null);
  let node = head;
  nodeValues = nodeValues.sort((a, b) => a - b);

  while (nodeValues.length > 0) {
    node.next = new ListNode(nodeValues.shift());
    node = node.next;
  }
  return head.next;
};
// @lc code=end
