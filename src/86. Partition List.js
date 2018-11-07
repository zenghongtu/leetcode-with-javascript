/**
 * Created by zenghongtu on 07/11/2018.
 * Desc: https://leetcode.com/problems/partition-list/
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
 * @param {number} x
 * @return {ListNode}
 */
// todo 降低空间复杂度
var partition = function (head, x) {
  // 小于 x 的链表虚拟头节点
  let dummyHead1 = new ListNode(null);
  // 大于 x 的链表虚拟头节点
  let dummyHead2 = new ListNode(null);
  // 入参链表当前节点
  let node = head,
    // 链表1当前节点
    node1 = dummyHead1,
    // 链表2当前节点
    node2 = dummyHead2;
  // 当节点不为 null 时进行处理
  while (node) {
    // 如果节点值小于x, 加入链表1
    if (node.val < x) {
      node1.next = node;
      node1 = node
      // 如果节点值大于x, 加入链表2
    } else {
      node2.next = node;
      node2 = node
    }
    // 循环遍历链表
    node = node.next
  }
  // 把链表1的最后一个节点 next 指向链表2中真实头节点
  node1.next = dummyHead2.next;
  // (重点) 把链表2最后一个节点的 next 指向 null
  node2.next = null;
  // 最后返回链表1中真实头节点
  return dummyHead1.next
};


const input = [1, 4, 3, 2, 5, 2], x = 3;
const result = partition(createList(input), x);

if (JSON.stringify(result) === JSON.stringify(createList([1, 2, 2, 4, 3, 5]))) {
  console.log('测试通过');
} else {
  console.log(result);
}

function ListNode(val) {
  this.val = val;
  this.next = null
}

function createList(input) {
  let node, head;
  input.forEach(item => {
    if (node) {
      node.next = new ListNode(item);
      node = node.next
    } else {
      head = node = new ListNode(item)
    }
  });
  return head
}
