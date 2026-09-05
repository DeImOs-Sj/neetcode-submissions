class StockSpanner {
     stack:number[]=[]
    constructor() {
        this.stack=[]
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price: number): number {
   
       this.stack.push(price)
       let count=1
     
        for(let i=this.stack.length-2;i>=0;i--){
            if(this.stack[i]<=price)
            {
                count++
            }else break
           
        }
        return count

         
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
