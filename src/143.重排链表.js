/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head) {
    return;
  }
  const queue = [];
  let node = head.next;

  while (node) {
    queue.push(node);
    node = node.next;
  }

  node = head;

  while (queue.length > 0) {
    node.next = queue.pop();
    node = node.next;
    node.next = queue.shift() || null;
    node = node.next;
  }

  if (node && node.next) {
    node.next = null;
  }
};

// TODO 拆成两半
// @lc code=end
