class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        let r = 0;
        let sum = 0;

        let minLen = Number.MAX_VALUE;
        while (r < nums.length) {
            sum = sum + nums[r];
            while (sum >= target && l<=r) {
                minLen = Math.min(minLen, r - l + 1);
                sum = sum - nums[l];
                l++;
            }

            r++;
        }
        return minLen==Number.MAX_VALUE ? 0:minLen;
    }
}
