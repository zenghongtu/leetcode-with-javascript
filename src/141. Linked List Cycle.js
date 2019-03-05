/*
https://leetcode.com/problems/linked-list-cycle/
 */
/*
思路：
 1. 硬做 .5s
 2. set 判重
 3. 快慢指针
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
var hasCycle = function (head) {
    let fast = slow = head;
    while (fast && slow && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) {
            return true
        }
    }
    return false
};
