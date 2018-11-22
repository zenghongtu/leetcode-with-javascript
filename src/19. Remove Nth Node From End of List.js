/**
 * Created by zenghongtu on 22/11/2018.
 * Desc: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 双指针技术
var removeNthFromEnd = function (head, n) {
  // 创建虚拟头节点(处理第一节点被去除的情况)
  let dummyHead = new ListNode(null);
  dummyHead.next = head;
  let p = dummyHead, q = dummyHead, count = 0;
  // 循环取下一个节点, 存储距离头节点 n 位置的节点为 q
  while (count++ < n) {
    q = q.next
  }
  // 当 q 和 q.next不为 null,循环取下一个节点
  while (q && q.next !== null) {
    q = q.next;
    p = p.next
  }
  // 此时 p 的下一个节点为目标节点
  // 跳过该节点(即删除该节点)
  p.next = p.next.next;
  // 最后返回虚拟头节点的下一个节点
  return dummyHead.next;
};

const input = [1, 2, 3, 4, 5];
const n = 5;
const result = removeNthFromEnd(createList(input), n);
if (JSON.stringify(result) === JSON.stringify(createList([2, 3, 4, 5]))) {
  console.log('\x1b[32mSuccess');
} else {
  console.log(result);
}

function ListNode(val) {
  this.val = val;
  this.next = null
}

function createList(input) {
  let head, node;
  input.forEach(val => {
    if (node) {
      node.next = new ListNode(val);
      node = node.next
    } else {
      node = head = new ListNode(val)
    }
  });
  return head
}
