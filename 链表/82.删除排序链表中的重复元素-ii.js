/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (47.50%)
 * Likes:    297
 * Dislikes: 0
 * Total Accepted:    50.8K
 * Total Submissions: 105.8K
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 *
 * 示例 1:
 *
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 *
 *
 * 示例 2:
 *
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 *
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
var deleteDuplicates = function (head) {
  let dummyHead = new ListNode(null);
  dummyHead.next = head;

  let slow = dummyHead;
  let fast = head;

  while (fast) {
    if (fast.next && fast.next.val === fast.val) {
      while (fast.next && fast.next.val === fast.val) {
        fast.next = fast.next.next;
      }
    } else {
      slow.next = fast;
      slow = slow.next;
    }
    fast = fast.next;
  }

  slow.next && (slow.next = null);

  return dummyHead.next;
};
// @lc code=end
