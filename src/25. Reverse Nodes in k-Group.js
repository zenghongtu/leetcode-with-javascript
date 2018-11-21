/**
 * Created by zenghongtu on 21/11/2018.
 * Desc: https://leetcode.com/problems/reverse-nodes-in-k-group/
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
// 递归
var reverseKGroup = function (head, k) {
  let count = 0, curr = head;
  // 通过计数,以 k 为间隔截取链表
  while (curr && count !== k) {
    curr = curr.next;
    count++
  }
  // 如果 count 等于 k,则需要进一步处理
  if (count === k) {
    // 递归处理余下链表节点,返回为当前节点
    curr = reverseKGroup(curr, k);
    // 循环处理 count 计数内节点
    while (count-- > 0) {
      // 对当前节点和下一个节点进行反向
      let tmp = head.next;
      head.next = curr;
      curr = head;
      head = tmp
    }
    // 最后的当前节点为头节点
    head = curr
  }
  // 返回头节点
  return head;
};

const head = createList([1, 2, 3, 4, 5]), k = 2;
const result = reverseKGroup(head, k);
if (JSON.stringify(result) === JSON.stringify(createList([2, 1, 4, 3, 5]))) {
  console.log('\x1b[32mSuccess');
} else {
  console.log(result);
}


function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createList(input) {
  let node, head;
  input.forEach(val => {
    if (node) {
      node.next = new ListNode(val);
      node = node.next
    } else {
      node = head = new ListNode(val);
    }
  });
  return head
}
