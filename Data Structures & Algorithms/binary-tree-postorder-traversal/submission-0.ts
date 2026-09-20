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
    postorderTraversal(root: TreeNode | null): number[] {
        if(!root) return this.order
        this.postorderTraversal(root.left)
        this.postorderTraversal(root.right)
        this.order.push(root.val)
        return  this.order



    }
}
