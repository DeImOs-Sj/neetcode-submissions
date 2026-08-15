class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    let r=0
    let l=0
    let maxLength=0
    let seen=new Set()
    while(r<s.length){       

        while(seen.has(s[r])){
        
        seen.delete(s[l])
            
        l++
        }
        
        seen.add(s[r])
        maxLength=Math.max(maxLength,r-l+1)
        r++
    }
    return maxLength


    }
}



