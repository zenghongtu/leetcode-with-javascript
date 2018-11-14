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
  // l1 对应当前节点
  let node1 = l1,
    // l2 对应当前节点
    node2 = l2;
  // 虚拟头节点
  let dummy = new ListNode(null);
  // 当前节点
  let cur = dummy;
  // 进一位
  let carry = 0;
  // 当某一条链节点不为空
  while (node1 !== null || node2 !== null) {
    // 当前节点值
    let d1 = node1 === null ? 0 : node1.val;
    let d2 = node2 === null ? 0 : node2.val;
    // 求和
    let sum = d1 + d2 + carry;
    // 如果大于等于10,进一位
    carry = sum >= 10 ? 1 : 0;
    // 节点下一个值
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    // 遍历节点
    if (node1 !== null) node1 = node1.next;
    if (node2 !== null) node2 = node2.next
  }
  // 如果是1说明还需要进一位,生成一个节点
  if (carry === 1) cur.next = new ListNode(carry);
  // 返回虚拟节点的下一个点
  return dummy.next
};


const l1 = [2, 4, 3],
  l2 = [5, 6, 4];
const result = addTwoNumbers(createList(l1), createList(l2));
if (JSON.stringify(result) === JSON.stringify(createList([7, 0, 8]))) {
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

