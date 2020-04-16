/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
var detectCycle0 = function (head) {
  const nodeMap = new Map();
  let node = head;

  while (node) {
    if (nodeMap.has(node)) {
      return node;
    }

    nodeMap.set(node, 1);
    node = node.next;
  }
  return null;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 快慢指针
  let s = head,
    f = head;

  while (f && f.next) {
    s = s.next;
    f = f.next.next;
    // 得出是环，但不一定是入口节点
    if (s === f) {
      // 将慢指针重置
      s = head;

      // 找到相交节点（这个节点为入口点）
      while (s !== f) {
        s = s.next;
        f = f.next;
      }
      return s;
    }
  }

  return null;
};

// @lc code=end

/*
解题方案：
1. Map
2. Set
3. 快慢指针，判断是环后重置找入口节点 [](https://leetcode.com/problems/linked-list-cycle-ii/discuss/495311/JavaScript-Two-Pointers-w-Extended-Notes)
4. 快慢指针两次（一次判断是环，二次寻找入口节点）
*/
