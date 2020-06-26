/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (49.90%)
 * Likes:    399
 * Dislikes: 0
 * Total Accepted:    56.3K
 * Total Submissions: 111.7K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 *
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  let dummyHead = new ListNode(null);
  dummyHead.next = head;

  // 用于记录在反转之前的那个节点
  let superior = dummyHead;

  for (let i = 1; i < m; i++) {
    superior = superior.next;
  }

  let prev = null;
  let curr = superior.next;

  // 进行反转
  for (let i = 0; i <= n - m; i++) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }

  /**
   * 修正反转后的指向
   *输入: 1->2->3->4->5->NULL, m = 2, n = 4
   *输出: 1->4->3->2->5->NULL
   * 此时 prev 为 4 ，curr 为 5，superior.next 为 2
   */
  superior.next.next = curr;
  superior.next = prev;

  return dummyHead.next;
};
// @lc code=end
