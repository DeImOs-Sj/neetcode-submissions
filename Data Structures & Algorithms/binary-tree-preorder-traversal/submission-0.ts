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
    preorderTraversal(root: TreeNode | null): number[] {
           if(!root) return this.order
                   this.order.push(root.val)

        this.preorderTraversal(root.left)
        // console.log(root.val)
        this.preorderTraversal(root.right)

        return this.order
    }
}
