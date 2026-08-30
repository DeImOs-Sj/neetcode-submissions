class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let stack: number[] = [];

        for (let i: number = 0; i < operations.length; i++) {
            let prev = stack[stack.length - 1];
            let secondPrev = stack[stack.length - 2];
            if (operations[i] == "+") {
                stack.push(prev + secondPrev);
            } else if (operations[i] == "C") {
                stack.pop();
            } else if (operations[i] == "D") {
                stack.push(prev * 2);
            } else {
                stack.push(Number(operations[i]));
            }
        }
        return stack.reduce((sum, num) => sum + num, 0);
    }
}
