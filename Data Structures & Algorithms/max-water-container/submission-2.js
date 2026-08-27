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
            let width = r - l;
            let height = Math.min(heights[r], heights[l])
            let area = width*height
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
