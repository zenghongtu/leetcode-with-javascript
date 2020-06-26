/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (65.24%)
 * Likes:    599
 * Dislikes: 0
 * Total Accepted:    69.3K
 * Total Submissions: 105.3K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 *
 * 示例 1:
 *
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 *
 *
 * 示例 2:
 *
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
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
var sortList = function (head) {
  if (!head || !head.next) return head;

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  fast = slow.next;

  slow.next = null;

  // 归并排序
  return merge(sortList(head), sortList(fast));
};

function merge(h1, h2) {
  const dummy = {};
  let cur = dummy;

  while (h1 && h2) {
    if (h1.val < h2.val) {
      cur.next = h1;
      h1 = h1.next;
    } else {
      cur.next = h2;
      h2 = h2.next;
    }

    cur = cur.next;
  }

  cur.next = h1 || h2;
  return dummy.next;
}

// @lc code=end
