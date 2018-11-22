/**
 * Created by zenghongtu on 22/11/2018.
 * Desc: https://leetcode.com/problems/rotate-list/
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  // 链表为空和 k 为0直接返回
  if (!head || k === 0) return head;
  let p = head, q = head, count = 0;
  // 找出当 count 等于 k 时,q 所在的节点
  while (count++ < k) {
    q = q.next;
    // 如果 q 为 null,说明在链表末尾
    if (q === null) {
      // q 重新去链表头
      q = head;
    }
  }
  // 如果 q 等于头,则不用旋转,直接返回链表
  if (q === head) return head;
  // 循环取下一节点,知道 q 的下一个节点为 null,则 p 的下一个节点为需要旋转的目标节点
  while (q && q.next) {
    q = q.next;
    p = p.next
  }
  // 旋转目标节点为新链表的头节点
  const newHead = p.next;
  // 旋转链表
  p.next = null;
  q.next = head;
  // 最后返回头节点
  return newHead;
};

const input = [1, 2, 3, 4, 5];
const k = 2;
const result = rotateRight(createList(input), k);
if (JSON.stringify(result) === JSON.stringify(createList([4, 5, 1, 2, 3]))) {
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
