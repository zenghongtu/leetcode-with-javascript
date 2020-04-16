/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
  if (!head) {
    return null;
  }
  if (k < 2) {
    return head;
  }

  // 判断是否有 k 个可以进行翻转
  let tail = head;
  for (let i = 1; i < k; i++) {
    tail = tail.next;
    if (!tail) {
      return head;
    }
  }

  // tail 的下一个为下一组的头
  let next = tail.next;

  // 将tail 的下一个设为 null（即截取出了当前这组）
  tail.next = null;

  // 进行反转
  reverse(head);

  // 递归翻转后挂载到当前 head 后面
  head.next = reverseKGroup(next, k);

  // 返回 tail（此时为当前链表的头）
  return tail;
};

// 翻转 （同 206）
const reverse = (head) => {
  let prev = null;
  let current = head;
  while (current) {
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};
// @lc code=end
