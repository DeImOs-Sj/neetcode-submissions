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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        function test(root: TreeNode | null): number  {
            if (root === null) return 0;
            let leftHeight = test(root.left);
            let rightHeight = test(root.right);
            if (leftHeight === -1 || rightHeight === -1) {
                return -1;
            }

            // Current node is unbalanced
            if (Math.abs(leftHeight - rightHeight) > 1) {
                return -1;
            }

            return 1 + Math.max(leftHeight, rightHeight);
        }
        let result = test(root);
        return result !== -1;
    }
}
