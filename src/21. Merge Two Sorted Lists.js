/**
 * Created by zenghongtu on 15/11/2018.
 * Desc: https://leetcode.com/problems/merge-two-sorted-lists/
 */

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
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  // l1/l2 当前节点
  let node1 = l1, node2 = l2,
    // 结果链表虚拟头节点和该链表当前节点
    dummy = node = new ListNode(null);
  // 节点1存在
  while (node1) {
    // 节点2存在
    while (node2) {
      // 如果节点2的值小于等于节点1的值
      if (node2.val <= node1.val) {
        // 添加到结果链表
        node.next = node2;
        node = node.next
      } else {
        break
      }
      // 取下一位l2节点
      node2 = node2.next
    }
    // 节点1添加到结果链表
    node.next = node1;
    node = node.next;
    node1 = node1.next
  }
  // node2 可能还存在未添加的节点,将其添加到结果链表
  node.next = node2;
  // 返回虚拟头节点的下一个(即去除虚拟头节点)
  return dummy.next
};


const l1 = createList([1, 2, 4]),
  l2 = createList([1, 3, 4]);
const result = mergeTwoLists(l1, l2);
if (JSON.stringify(result) === JSON.stringify(createList([1, 1, 2, 3, 4, 4]))) {
  console.log('测试通过');
} else {
  console.log(result);
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function createList(input) {
  let head, node;
  input.forEach(val => {
    if (node) {
      node.next = new ListNode(val);
      node = node.next
    } else {
      head = node = new ListNode(val)
    }
  });
  return head;
}
