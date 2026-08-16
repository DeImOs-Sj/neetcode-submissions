class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                return true; // Duplicate found!
            }
            seen.set(nums[i], true); // Mark number as seen
        }

        return false; // No duplicates found after checking all elements
    
    }
}
