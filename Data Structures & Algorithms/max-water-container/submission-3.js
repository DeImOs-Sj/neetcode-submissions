class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l=0
        let r=heights.length-1
        let waterStored=0
        while(l<r){
            let area = (r - l) * Math.min(heights[r], heights[l])
            waterStored=Math.max(waterStored,area)

            if(heights[l]<heights[r]){
                l++
            }else{
                r--
            }


        }
        return waterStored
    }
}
