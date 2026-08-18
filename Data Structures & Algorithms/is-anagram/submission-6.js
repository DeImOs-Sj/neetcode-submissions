class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    let hash1= new Array(26).fill(0)
    let hash2= new Array(26).fill(0)
    if(s.length != t.length) return false 
    for(let i=0;i<s.length;i++){
        let index = s.charCodeAt(i) - 'a'.charCodeAt(0);
        hash1[index]++

        let index2 = t.charCodeAt(i) - 'a'.charCodeAt(0);
        hash2[index2]++

    }
    let isEqual = JSON.stringify(hash1)===JSON.stringify(hash2)
    return isEqual


}
}
