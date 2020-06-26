/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (62.29%)
 * Likes:    1039
 * Dislikes: 0
 * Total Accepted:    265.7K
 * Total Submissions: 425.9K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

var mergeTwoLists1 = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;

  const dummyHead = new ListNode(null);
  let node = dummyHead;

  while (node1 || node2) {
    if ((node1 && node2 && node2.val > node1.val) || !node2) {
      node.next = node1;
      node1 = node1.next;
    } else {
      node.next = node2;
      node2 = node2.next;
    }
    node = node.next;
  }

  return dummyHead.next;
};
// @lc code=end
