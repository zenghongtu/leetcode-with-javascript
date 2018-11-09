/**
 * Created by zenghongtu on 09/11/2018.
 * Desc: 2. Add Two Numbers
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
var addTwoNumbers = function (l1, l2) {
  let head, node, node1 = l1, node2 = l2, x = 0;
  while (node1 || node2) {
    let val1 = (node1 && node1.val) || 0;
    let val2 = (node2 && node2.val) || 0;
    let num = val1 + val2;
    if (node) {
      node.next = new ListNode((num >= 10 ? num - 10 : num) + x);
      node = node.next
    } else {
      head = node = new ListNode((num >= 10 ? num - 10 : num) + x)
    }
    num >= 10 ? x = 1 : x = 0;

    node1 = (node1 && node1.next) || null;
    node2 = (node2 && node2.next) || null
  }
  return head
};

const l1 = [0],
  l2 = [7, 3];
const result = addTwoNumbers(createList(l1), createList(l2));
if (JSON.stringify(result) === JSON.stringify(createList([7, 3]))) {
  console.log('测试通过');
} else {
  console.log(result);
}


function ListNode(val) {
  this.val = val;
  this.next = null;
}


function createList(input) {
  var node, head;
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

