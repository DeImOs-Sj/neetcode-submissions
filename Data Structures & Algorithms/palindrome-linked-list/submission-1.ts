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


    reverseLinkedList(head: ListNode | null): ListNode {
        let dummy = null;
        let current = head;
        while (current != null) {
            let temp = current.next;
            current.next = dummy;
            dummy = current;
            current = temp;

        }
        return dummy
    }

    isPalindrome(head: ListNode | null): boolean {
        let slow = head
        let fast = head
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next
            fast = fast.next.next
        }
        let newNode = this.reverseLinkedList(slow.next)
        let first = head
        let second = newNode
        while (second != null) {
            if (first.val != second.val) {
                this.reverseLinkedList(second)
                return false
            }
            first = first.next
            second = second.next

        }
        this.reverseLinkedList(second)
        return true


    }
}
