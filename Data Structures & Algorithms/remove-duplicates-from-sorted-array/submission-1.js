class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 0;
        let r = l + 1;
        while (r < nums.length) {
            if (nums[l] === nums[r]) {
                nums.splice(r, 1);
            } else if (nums[l] != nums[r]) {
                l++;
                r++;
            }
        }
        return nums.length;
    }
}
