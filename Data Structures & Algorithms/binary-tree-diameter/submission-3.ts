/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    diameterOfBinaryTree(root: TreeNode | null): number {

let maximum = 0
        function test(root) {
            if (!root) return 0

            let left = test(root.left)
            let right = test(root.right)
            maximum = Math.max(left + right, maximum)
            return 1 + Math.max(left, right)
        }

        test(root)
        return maximum
        

    }
}
