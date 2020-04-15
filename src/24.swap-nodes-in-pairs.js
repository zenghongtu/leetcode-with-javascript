/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function (head) {
  // 需要先定义一个虚拟头结点来处理
  const dHead = new ListNode(null);
  dHead.next = head;

  let prev = dHead;

  // 处理下一个和下下一个（少一个不处理）
  while (prev.next && prev.next.next) {
    const a = prev.next;
    const b = prev.next.next;

    // 进行交换
    [prev.next, b.next, a.next] = [b, a, b.next];

    // 此时 a 为prev 后面的第二节点
    prev = a;
  }

  return dHead.next;
};
// @lc code=end
