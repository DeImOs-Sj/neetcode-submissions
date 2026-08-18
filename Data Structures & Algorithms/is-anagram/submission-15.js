class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
     let hash1= new Array(26).fill(0)

    if(s.length != t.length) return false 
    for(let i=0;i<s.length;i++){
        hash1[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        hash1[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        

    }
    const allZeros = hash1.every(x => x === 0);
    return allZeros


}
}
