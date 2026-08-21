class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices){
    let maximumProfit = 0
    for (let i = 0; i < prices.length; i++) {

        let buy = prices[i]
        // console.log(buy)
        for (let j = i+1; j < prices.length; j++) {
            let sell = prices[j]
            // console.log(sell)

            let profitTillNow = sell - buy
            if(profitTillNow>maximumProfit && profitTillNow >=0){
                maximumProfit=profitTillNow
                
            }  

            
            
            

            // if(maximumProfit<=0) return 0
        }
    }
    if (maximumProfit == 0) return 0 
    else
    return maximumProfit
}
}
