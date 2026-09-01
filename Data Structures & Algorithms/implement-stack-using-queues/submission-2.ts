class MyStack {
    queue1: number []
    constructor() {
        this.queue1 = []

    }


    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.queue1.push(x)
        let size=this.queue1.length
        while(size>1){
            this.queue1.push(this.queue1.shift()!)
            size--

        }

    }

    /**
     * @return {number}
     */
    pop(): number {
  
        return this.queue1.shift()!
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.queue1[0]
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.queue1.length === 0
    }
}


 
 
