/**
 * Created by zenghongtu on 15/10/2018
 * Desc: https://leetcode.com/problems/remove-linked-list-elements/description/
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
 * @param {number} val
 * @return {ListNode}
 */
// 思路是创建一个虚拟头节点
var removeElements = function (head, val) {
    // 创建虚拟头节点
    const dummyHead = new ListNode(NaN);
    // 该节点的 next 指向真实头节点
    dummyHead.next = head;
    // 初始化当前节点为虚拟头节点
    let curNode = dummyHead;
    // 如果当前节点的下一个节点不为 null
    while (curNode.next) {
        // 下一个节点
        const nextNode = curNode.next;
        // 如果下一个节点的值等于目标值
        if (nextNode.val === val) {
            // 把当前值的下一个节点指向下一个节点的下一个节点（即跳过下一个节点）
            curNode.next = nextNode.next
        } else {
            // 否则把当前节点指到下一个节点
            curNode = nextNode
        }
    }
    // 返回虚拟头的下一个节点（即真实头节点）
    return dummyHead.next
};

const input = [1, 2, 6, 3, 4, 5, 6], val = 6;
result = removeElements(createList(input), val);
if (JSON.stringify(result) === JSON.stringify(createList([1, 2, 3, 4, 5]))) {
  console.log('\x1b[32mSuccess');
} else {
    console.log(result);
    console.log('测试失败');
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createList(input) {
    let head = new ListNode(input[0]);
    let i = 0, cur = head;
    while (++i < input.length) {
        cur.next = new ListNode(input[i]);
        cur = cur.next
    }
    return head
}

