/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 龟兔赛跑
  let a = head,
    b = head;

  while (a && b && b.next) {
    a = a.next;
    // b 多取两个跑快点
    b = b.next.next;
    if (a === b) {
      return true;
    }
  }
  return false;
};
// @lc code=end
