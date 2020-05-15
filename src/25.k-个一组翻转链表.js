/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  // 利用栈的先进后出特性进行反转
  const stack = [];
  const dummyHead = new ListNode(null);
  let current = dummyHead;

  while (1) {
    let count = 0;

    let node = head;
    while (node && count < k) {
      stack.push(node);
      node = node.next;
      count++;
    }

    if (count < k) {
      current.next = head;
      break;
    }

    while (stack.length > 0) {
      current.next = stack.pop();
      current = current.next;
    }

    head = node;
  }

  return dummyHead.next;
};
// @lc code=end
