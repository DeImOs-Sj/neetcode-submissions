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
     * @return {number[][]}
     */
    zigzagLevelOrder(root: TreeNode | null): number[][] {
        if (!root) {
            return [];
        }
        let ans = [];
        let queue = [];
        queue.push(root);
        while (queue.length != 0) {
            let size = queue.length;
            let tempArr = [];
            while (size) {
                let temp = queue[0];
                tempArr.push(temp.val);

                queue.shift();

                if (temp.left != null) {
                    queue.push(temp.left);
                }
                if (temp.right != null) {
                    queue.push(temp.right);
                }
                size--;
            }
            if (ans.length % 2 === 1) {
                tempArr.reverse();
            }
            ans.push(tempArr)
        }

        return ans;
    }
}
