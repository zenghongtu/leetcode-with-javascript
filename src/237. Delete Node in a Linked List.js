/**
 * Created by zenghongtu on 21/11/2018.
 * Desc: https://leetcode.com/problems/delete-node-in-a-linked-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 读懂了题意非常简单
// 获取下一个节点 val 和 next 就可以
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next
};

const head = createList([4, 5, 1, 9]), node = 1;

function test(head, node) {
  let curr = head;
  while (curr) {
    if (curr.val === node) {
      deleteNode(curr)
    }
    curr = curr.next
  }
  return head
}

const result = test(head, node);
if (JSON.stringify(result) === JSON.stringify(createList([4, 5, 9]))) {
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
      node = head = new ListNode(val)
    }
  });
  return head
}
