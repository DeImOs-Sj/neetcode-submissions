class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        for (let i = 0; i <= matrix.length - 1; i++) {
            

            if (matrix[i][0] <= target && target <= matrix[i][matrix[i].length - 1]) {
                let low = 0;
                let high = matrix[i].length-1;
                console.log(high)
                while (low <= high) {
                    let mid = Math.floor((low + high) / 2);

                    if (matrix[i][mid] === target) {
                        return true
                    } else if (matrix[i][mid] > target) {
                        high = mid - 1;
                    } else {
                        low = mid + 1;
                    }
                }
            }
        }
        return false;
    }
}
