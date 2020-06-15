/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
  if (!head) return head;

  let prev = null;
  let curr = head;

  while (curr) {
    // prev curr curr.next
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }

  return prev;
};
// @lc code=end
