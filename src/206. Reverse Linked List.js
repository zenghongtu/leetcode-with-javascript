/**
 * Created by zenghongtu on 14/10/2018
 * Desc: https://leetcode.com/problems/reverse-linked-list/description/
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
// 思路是保存三个位置 pre，cur，next的值，然后循环向后移动
var reverseList = function (head) {
    // 初始化前一项为 null
    let pre = null,
        // 当前项为 head
        cur = head;
    // 如果当前项不为 null，进入循环
    while (cur) {
        // 首先保存下一项
        const next = cur.next;
        // 然后改变下一项为前一项
        cur.next = pre;
        // 再把前一项改为当前项
        pre = cur;
        // 当前项改为下一项
        cur = next
    }
    // 最后返回当前的前一项 （此时当前项为 null）
    return pre
};


const head = createList([1, 2, 3, 4, 5]);
const result = reverseList(head);
if (JSON.stringify(result) === JSON.stringify(createList([5, 4, 3, 2, 1]))) {
    console.log('测试通过');
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
    let head = new ListNode(input[0]);
    let cur = head, i = 1;
    while (i < input.length) {
        cur.next = new ListNode(input[i++]);
        cur = cur.next
    }
    return head
}
