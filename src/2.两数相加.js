/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let node = dummyHead;
  let carry = 0;
  let sum = 0;

  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

    node.next = new ListNode(sum % 10);
    node = node.next;
    carry = sum > 9 ? 1 : 0;

    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }

  carry && (node.next = new ListNode(carry));

  return dummyHead.next;
};
// @lc code=end
