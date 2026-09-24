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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        if (!root) return false;
        let path = [];
        let pathSum = [];
        path.push(root);
        pathSum.push(root.val);
        while (path.length>0) {
            let temp = path.shift();
            let tempSum = pathSum.shift();

            if (temp.left == null && temp.right == null && tempSum == targetSum) {
                return true;
            }
                   if (temp.right != null) {
                path.push(temp.right);
                pathSum.push(temp.right.val + tempSum);
            }

            if (temp.left != null) {
                path.push(temp.left);
                pathSum.push(temp.left.val + tempSum);
            }
     
        }
        return false;
    }
}
