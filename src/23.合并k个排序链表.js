/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists1 = function (lists) {
  if (lists.length < 2) {
    return lists[0] || null;
  }
  const arr = [];

  for (const list of lists) {
    let node = list;
    while (node) {
      arr.push(node.val);
      node = node.next;
    }
  }

  arr.sort((a, b) => a - b);

  const dummyHead = new ListNode(null);

  let node = dummyHead;

  for (const num of arr) {
    node.next = new ListNode(num);
    node = node.next;
  }
  return dummyHead.next;
};

var mergeKLists = function (lists) {
  if (lists.length < 2) {
    return lists[0] || null;
  }

  // 分治
  const mergeTwoLists = (l1, l2) => {
    if (l1 === null) {
      return l2;
    }

    if (l2 === null) {
      return l1;
    }

    if (l2.val > l1.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
  };

  let ret;
  for (const list of lists) {
    if (!ret) {
      ret = list;
    } else {
      ret = mergeTwoLists(ret, list);
    }
  }
  return ret;
};
// @lc code=end
