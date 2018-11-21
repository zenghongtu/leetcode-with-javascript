/**
 * Created by zenghongtu on 14/10/2018
 * Desc: https://leetcode.com/problems/reverse-linked-list-ii/
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
// 这题稍微有点绕
var reverseBetween = function (head, m, n) {
  if (head == null || head.next == null || m === n) return head;
  let pre = null, next, cur = head, i = 1, nodeM = null, nodeS = null;
  // 分两种情况
  // m===1和 m!==1
  if (m === 1) {
    while (cur) {
      //  n 前面的部分进行的链表反转
      next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
      i++;
      // 当 i===n 时
      if (i === n) {
        // 如果存在下一个时
        if (cur.next) {
          next = cur.next;
          cur.next = pre;
          // 把当前项下一个设为当前 head 的下一个
          head.next = next;
          // 把 head 改成当前项
          head = cur
        } else {
          // 不存在的话就是简单的链表反转
          cur.next = pre;
          head = cur
        }
        return head
      }
    }
  }

  while (cur) {
    next = cur.next;
    if (i === m - 1) {
      // 记录 m 前面的一个
      nodeS = cur;
      cur = next
      // 当 i===m 时,即开始反转的第一个
    } else if (i === m) {
      // 记录一下,之后进行修改 next
      nodeM = cur;
      pre = cur;
      cur = next
      // 当 i===n 时,就是反转的最后一个
    } else if (i === n) {
      cur.next = pre;
      nodeS.next = cur;
      nodeM.next = next;
      // 这个 n 之后的可以不进行处理,所有直接退出
      break
    }
    i++;
    // 对在 m 和 n 中间的项进行反转
    while (i > m && i < n) {
      next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
      i++
    }
    // 在 m 之前的项,不断遍历下一个
    cur = next
  }
  return head
};

const input = createList([1, 2, 3, 4, 5]), m = 3, n = 4;
const result = reverseBetween(input, m, n);

if (JSON.stringify(result) === JSON.stringify(createList([1, 2, 4, 3, 5]))) {
  console.log('\x1b[32mSuccess');
} else {
  console.log(result);
  console.log('测试失败');
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}


// 创建链表
function createList(input) {
  let head, cur;
  input.forEach(item => {
    if (cur) {
      cur.next = new ListNode(item);
      cur = cur.next
    } else {
      head = cur = new ListNode(item)
    }
  });
  return head
}
