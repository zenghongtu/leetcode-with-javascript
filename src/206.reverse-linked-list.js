/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function (head) {
  let current = head,
    prev = null;

  while (current) {
    // next 指向prev, 并往后移动一位
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};
// @lc code=end
