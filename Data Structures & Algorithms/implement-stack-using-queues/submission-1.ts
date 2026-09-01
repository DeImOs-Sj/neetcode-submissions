class MyStack {
    queue1: number[]
    queue2: number[]
    constructor() {
        this.queue1 = []

    }


    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.queue1.push(x)

    }

    /**
     * @return {number}
     */
    pop(): number {
        let temp =this.queue1.length-1
        let poppedElement=this.queue1[temp]
        this.queue1.splice(temp,1)
  
        return poppedElement
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.queue1[this.queue1.length - 1]
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.queue1.length === 0
    }
}