/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists1 = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  // 递归
  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  } else {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
};

var mergeTwoLists = function (l1, l2) {
  let dummyHead = new ListNode(null);

  let node = dummyHead,
    node1 = l1,
    node2 = l2;

  // 循环
  while (node1 || node2) {
    if (node1 === null) {
      node.next = node2;
      break;
    }

    if (node2 === null) {
      node.next = node1;
      break;
    }

    if (node2.val < node1.val) {
      node.next = node2;
      node2 = node2.next;
    } else {
      node.next = node1;
      node1 = node1.next;
    }
    node = node.next;
  }

  return dummyHead.next;
};
// @lc code=end
