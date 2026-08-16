class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
    let i=0
    let j=s.length-1
    while(i<s.length && i<j){
        while(j>=0){
            let value1=s[i]
            let value2=s[j]
            s[i]=value2
            s[j]=value1

            break
        }
        j--
        i++


    }
    return s
    }
}
