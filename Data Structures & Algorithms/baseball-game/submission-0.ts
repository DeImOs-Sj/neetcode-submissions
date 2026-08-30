class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let stack: number[] = []
 
        for (let i: number = 0; i < operations.length; i++) {
            let prev = stack[stack.length - 1]
            let secondPrev = stack[stack.length - 2]          
            if (operations[i] == '+') {
                console.log(stack)


                stack.push(prev + secondPrev)

            } else if (operations[i] == 'C') {
                console.log(stack)

                stack.pop()
            }
            else if (operations[i] == 'D') {
                console.log(stack)

                stack.push(prev * 2)
            }
            else {
                stack.push(Number(operations[i]));
                console.log(stack)
            }



        }
        return stack.reduce((sum, num) => sum + num, 0);

    }
}
