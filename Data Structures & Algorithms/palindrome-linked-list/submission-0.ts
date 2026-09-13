/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    isPalindrome(head: ListNode | null): boolean {
        let dummy = null;
        let current = head;
        let array = [];
        let i = 0
        while (head != null) {
            array.push(head.val);
            head = head.next;
        }
    
        while (current != null) {
            let temp = current.next;
            current.next = dummy;
            dummy = current;
            current = temp;

        }
        while (i < array.length && dummy != null) {
            if (dummy.val === array[i]) {
                dummy = dummy.next
                i++
            } else { return false }

        }
        return true;
    }
}
