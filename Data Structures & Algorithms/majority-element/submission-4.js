class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let element = null;

        for (let i = 0; i < nums.length; i++) {
           
            if (count === 0) {
                element = nums[i];
            }

            if (nums[i] === element) {
                count++;
            } else {
                count--;
            }
        }

        return element;
    }
}
