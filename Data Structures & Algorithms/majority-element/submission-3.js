class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let element = null;

        for (let i = 0; i < nums.length; i++) {
            // If count reaches 0, pick the current number as the new candidate
            if (count === 0) {
                element = nums[i];
            }

            // Increment count if current number matches candidate, else decrement
            if (nums[i] === element) {
                count++;
            } else {
                count--;
            }
        }

        return element;
    }
}
