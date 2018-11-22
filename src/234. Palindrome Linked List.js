/**
 * Created by zenghongtu on 22/11/2018.
 * Desc: https://leetcode.com/problems/palindrome-linked-list/
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 记录每个节点值
  const arr = [];
  let node = head;
  // 遍历链表,添加各个值到 arr 中
  while (node) {
    arr.push(node.val);
    node = node.next
  }
  // 最后返回 数组转换的字符串和数组反向后转换的字符串比较后的值
  return arr.join('') === arr.reverse().join('')
};

const input = [1, 2];
const result = isPalindrome(createList(input));
if (result === false) {
  console.log('\x1b[32mSuccess');
} else {
  console.log(result);
}

function ListNode(val) {
  this.val = val;
  this.next = null
}

function createList(input) {
  let head, node;
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
