/**
 * Created by zenghongtu on 04/11/2018
 * Desc: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  // 创建虚拟头节点
  const dummyHead = new ListNode(null);
  // 虚拟头节点next 指向真实头节点
  dummyHead.next = head;
  let curNode = dummyHead, next = curNode.next;
  // 当前节点和下一节点都存在时,进行处理
  while (curNode && next) {
    // 如果存在下一节点的下一节点
    if (next.next) {
      // 如果next的值不等于next.next 的值,就是我们需要的节点
      if (next.val !== next.next.val) {
        // 设置当前节点为下一个节点
        curNode = next;
        next = curNode.next
      } else {
        // 当next.next存在 并且 它们的值相等
        while (next.next && next.val === next.next.val) {
          // 循环取下一个节点
          next = next.next
        }
        // 此时 next 为重复节点中的最后一个节点,取它的下一个节点(即跳过它)
        next = next.next;
        curNode.next = next
      }
    } else {
      // next.next === null 就直接退出
      break
    }
  }
  // 返回虚拟头节点的下一个节点就是我们需要的链表
  return dummyHead.next
};


const input = [1, 2, 3, 3, 4, 4, 5];
const result = [1, 2, 5];

if (JSON.stringify(createList(result)) === JSON.stringify(deleteDuplicates(createList(input)))) {
  console.log('测试通过');
} else {
  console.log(deleteDuplicates(input));
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
      head = node = new ListNode(val)
    }
  });
  return head
}

