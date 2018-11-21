/**
 * Created by zenghongtu on 15/11/2018.
 * Desc: https://leetcode.com/problems/add-two-numbers-ii/
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
// var addTwoNumbers = function (l1, l2) {
//   // 分别存储两个链表转换成的数组
//   let arr1 = [],
//     arr2 = [];
//   // 分别存储两个链表的当前节点
//   let node1 = l1,
//     node2 = l2;
//   // 返回链表的头节点
//   let dummy = null;
//   // 遍历两个链表,存入数组中
//   while (node1 || node2) {
//     if (node1 && node1.val !== undefined) {
//       arr1.push(node1.val);
//       node1 = node1.next
//     }
//     if (node2 && node2.val !== undefined) {
//       arr2.push(node2.val);
//       node2 = node2.next
//     }
//   }
//   let len1 = arr1.length,
//     len2 = arr2.length,
//     i = 1,
//     // 记录上一个值是否大于等于10
//     carry = 0;
//   // 从末尾遍历两个数组
//   while (arr1[len1 - i] !== undefined || arr2[len2 - i] !== undefined) {
//     // 求和
//     let sum = (arr1[len1 - i] || 0) + (arr2[len2 - i] || 0) + carry;
//     // 如果大于等于10, carry 记录一下
//     carry = sum >= 10 ? 1 : 0;
//     // 根据值生成当前节点
//     let node = new ListNode(sum % 10);
//     // 当前节点指向前一节点
//     node.next = dummy;
//     // 把当前节点设为头节点
//     dummy = node;
//     i++
//   }
//   // 如果最后carry为1,说明还有剩一位,继续生成头节点
//   if (carry === 1) {
//     let node = new ListNode(1);
//     node.next = dummy;
//     dummy = node
//   }
//   // 返回头节点
//   return dummy
// };

  // 用栈来代替数组, 优化逻辑
var addTwoNumbers = function (l1, l2) {
    let node1 = l1, node2 = l2, stack1 = [], stack2 = [], dummy = null, carry = 0;
    while (node1) {
      // 入栈
      stack1.push(node1.val);
      node1 = node1.next
    }
    while (node2) {
      stack2.push(node2.val);
      node2 = node2.next
    }

    while (stack1.length > 0 || stack2.length > 0) {
      // 出栈
      const sum = (stack1.pop() || 0)
        + (stack2.pop() || 0)
        + carry;
      carry = sum > 9 ? 1 : 0;
      const node = new ListNode(sum % 10);
    node.next = dummy;
      dummy = node
  }
  if (carry === 1) {
    const node = new ListNode(1);
    node.next = dummy;
    dummy = node
  }
  return dummy
};

const l1 = createList([0]);
const l2 = createList([0]);
const result = addTwoNumbers(l1, l2);
const output = createList([0]);

if (JSON.stringify(result) === JSON.stringify(output)) {
  console.log('\x1b[32mSuccess');
} else {
  console.log(result)
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
