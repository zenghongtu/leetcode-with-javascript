/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (41.70%)
 * Likes:    533
 * Dislikes: 0
 * Total Accepted:    98.7K
 * Total Submissions: 233.7K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 *
 * 示例 1:
 *
 * 输入: 1->2
 * 输出: false
 *
 * 示例 2:
 *
 * 输入: 1->2->2->1
 * 输出: true
 *
 *
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) {
    return true;
  }

  let slow = head;
  let fast = head;

  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;

    [slow.next, prev, slow] = [prev, slow, slow.next];
  }

  // 如果存在 fast 说明最后一个每走完（奇数），slow 往后走一步
  if (fast) {
    slow = slow.next;
  }

  while (slow) {
    if (slow.val !== prev.val) {
      return false;
    }
    slow = slow.next;
    prev = prev.next;
  }
  return true;
};
// @lc code=end
