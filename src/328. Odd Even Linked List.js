/**
 * Created by zenghongtu on 08/11/2018.
 * Desc: https://leetcode.com/problems/odd-even-linked-list/
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

var oddEvenList = function (head) {
  // 入参不满足要求, 直接返回
  if (!head) return head;
  if (head && !head.next) return head;
  // 奇数节点
  let oddNode = head,
    // 偶数链表头和节点
    evenHead = evenNode = head.next;
  // 必要条件: 当前奇数节点及其下一节点存在,当前偶数节点及其下一个节点存在
  while (oddNode && oddNode.next && evenNode.next) {
    // 把当前奇数节点下一个指向 当前偶数节点的下一个,然后 移过去当前奇数节点
    oddNode.next = evenNode.next;
    oddNode = oddNode.next;
    // 同理,移动偶数链节点
    evenNode.next = oddNode.next;
    evenNode = evenNode.next
  }
  // 把奇数链表节点的最后一个指向偶数表头
  oddNode.next = evenHead;
  // 最后返回表头
  return head
};

const input = [1, 2, 3, 4, 5];
const result = oddEvenList(createList(input));
if (JSON.stringify(result) === JSON.stringify(createList([1, 3, 5, 2, 4]))) {
  console.log('测试通过');
} else {
  console.log(result);
}

function ListNode(val) {
  this.val = val;
  this.next = null;
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
