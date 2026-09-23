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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        function compare(root1,root2){
            if(!root1 && !root2) return true
            if(!root1 && root2) return false
            if(root1 && !root2) return false
            if(root1.val !== root2.val){
                return false 
            }
            let treeLefts= compare(root1.left,root2.left)
            let treeRight= compare(root1.right,root2.right)

            return treeLefts && treeRight


        }
        let result = compare(p,q)
        console.log(result)
        return result
    }

}
