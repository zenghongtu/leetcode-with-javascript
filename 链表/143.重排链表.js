/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 *
 * https://leetcode-cn.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (55.85%)
 * Likes:    228
 * Dislikes: 0
 * Total Accepted:    26.6K
 * Total Submissions: 47.5K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 * 示例 1:
 *
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 *
 * 示例 2:
 *
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
 *
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
  const nodes = [];

  let node = head;
  while (node) {
    nodes.push(node);
    node = node.next;
  }

  const dummyHead = new ListNode(null);
  node = dummyHead;

  for (let i = 0, len = nodes.length; i < len; i++) {
    node.next = i % 2 === 0 ? nodes.shift() : nodes.pop();
    node = node.next;
  }

  node && (node.next = null);

  return dummyHead.next;
};
// @lc code=end
