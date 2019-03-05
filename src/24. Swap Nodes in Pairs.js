/**
 * Created by zenghongtu on 19/11/2018.
 * Desc: https://leetcode.com/problems/swap-nodes-in-pairs/
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
var swapPairs = function (head) {
  // 排除掉空值/只有一个值得链表
  if (!head || !head.next) return head;
  // 分别取值当前节点和下一个节点和下下个节点
  let node1 = head, node2 = node1.next, next = node2.next;
  // 创建一个虚拟头节点(方便对头节点进行交换),
  const dummy = p = new ListNode(null);
  p.next = head;
  // 当节点1和节点2存在
  while (node1 && node2) {
    // 对节点进行交换
    p.next = node2;
    node1.next = next;
    node2.next = node1;
    p = node1;
    node1 = p.next;
    node2 = node1 && node1.next;
    next = node2 && node2.next
  }
  // 最后返回虚拟头节点的下一个节点(去掉虚拟头节点)
  return dummy.next
};

// 如果可以交换节点 val 值 (非题目正确答案)
// var swapPairs = function (head) {
//   var curNode = head;
//   var temp ;
//   while(curNode !== null && curNode.next !== null){
//     temp = curNode.next.val;
//     curNode.next.val = curNode.val;
//     curNode.val = temp;
//     curNode = curNode.next.next
//   }
//   return head
// };


// 优化
// var swapPairs = function(head) {
//   let pre=new ListNode(null);
//   pre.next=head;
//   let result = pre;
//   while(pre.next && pre.next.next){
//     const a = pre.next,b = pre.next.next;
//     [pre.next,b.next,a.next] = [a.next,a,b.next]
//     pre = a
//   }
//   return result.next;
// };

const input = createList([1, 2, 3]);
const result = swapPairs(input);
if (JSON.stringify(result) === JSON.stringify(createList([2, 1, 3]))) {
  console.log('\x1b[32mSuccess');
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
  return head
}
