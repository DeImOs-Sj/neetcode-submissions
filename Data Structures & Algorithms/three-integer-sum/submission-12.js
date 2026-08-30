class Solution {
    threeSum(arr) {
        // if (!arr || arr.length < 3) return [];

        arr.sort((a, b) => a - b);
        const result = new Set(); // Stores string representations

        for (let i = 0; i < arr.length - 2; i++) {
            let left = i + 1;
            let right = arr.length - 1;

            while (left < right) {
                const sum = arr[i] + arr[left] + arr[right];

                if (sum === 0) {
                    // Stringify the triplet so JavaScript Set compares values instead of references
                    result.add(`${arr[i]},${arr[left]},${arr[right]}`);
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        // Convert the string set back into an array of number arrays
        return Array.from(result, triplet => triplet.split(',').map(Number));
    }
}