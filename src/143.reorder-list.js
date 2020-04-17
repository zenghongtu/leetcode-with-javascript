/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const stack = [];

  let node = head;

  // 把节点加入栈中
  while (node.next) {
    stack.push(node.next);
    node = node.next;
  }

  let i = 0;
  let len = stack.length;

  node = head;

  // 重新组合
  while (i < len) {
    if (i % 2 !== 0) {
      node.next = stack.shift();
    } else {
      node.next = stack.pop();
    }

    node = node.next;
    i++;
  }
  node.next = null;
};

// @lc code=end
