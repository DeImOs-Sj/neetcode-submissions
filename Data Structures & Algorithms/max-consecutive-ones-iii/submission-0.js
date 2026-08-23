class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let l = 0
        let r = 0
        let maxLen = 0
        let zeroCount = 0
        while (r < nums.length) {
            if (nums[r] == 0) {
                
                zeroCount++

            }
            if (zeroCount <= k) {
                maxLen = Math.max(maxLen, (r - l) + 1)
                
            }
            while(zeroCount>k){
                if(nums[l]==0){
                    zeroCount--
                }
                          l++


            }
            



            r++
        }
        return maxLen
    }
}
