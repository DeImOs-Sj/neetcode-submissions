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
     * @return {number[]}
     */
    order:number[]
    constructor(){
        this.order=[]
    }
    inorderTraversal(root: TreeNode | null): number[] {
        if(!root) return this.order
        this.inorderTraversal(root.left)
        // console.log(root.val)
        this.order.push(root.val)
        this.inorderTraversal(root.right)

        return this.order
    }
}
