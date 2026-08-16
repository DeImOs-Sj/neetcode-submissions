class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let trimmedString = s.trim();
        let normalizedString = trimmedString.replace(/[^a-zA-z0-9]/g, "");
        let j = normalizedString.length - 1;
        let rev = "";
        for (let i = j; i >= 0; i--) {
            rev += normalizedString[i];
        }
        if (normalizedString.toLowerCase() === rev.toLowerCase()) return true;
        else return false;
    }
}
