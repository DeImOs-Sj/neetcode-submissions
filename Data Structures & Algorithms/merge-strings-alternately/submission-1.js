class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let newWord=''
        let maxlength=Math.max(word1.length,word2.length)
        for(let i=0;i<maxlength;i++){
            if(i<word1.length) newWord += word1[i]
            if(i<word2.length) newWord += word2[i]
        }
        return newWord
    }
}