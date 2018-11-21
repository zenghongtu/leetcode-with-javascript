/**
 * Created by zenghongtu on 07/11/2018.
 * Desc: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
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
  // 当前节点
  let node = head,
    // 前一个节点
    pre;
  // 当节点不为 null 时进行处理
  while (node) {
    // 当前一个节点存在(初始时 node 为 undefined), 并且当前节点和前一节点的值相等
    if (pre && node.val === pre.val) {
      // 前一节点的 next 指向当前节点的下一个节点(即跳过当前节点)
      pre.next = node.next
    } else {
      // 如果不相等,就把当前节点赋值为前一节点
      pre = node
    }
    // 遍历下一个节点
    node = node.next
  }
  // 返回 head
  return head
};


const input = createList([1, 1, 2]);
const result = deleteDuplicates(input);
if (JSON.stringify(result) === JSON.stringify(createList([1, 2]))) {
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
  input.forEach((val) => {
    if (head) {
      node.next = new ListNode(val);
      node = node.next
    } else {
      head = node = new ListNode(val)
    }
  });
  return head
}
